const bcrypt = require("bcrypt");

const userSchema = require("../../schema/userSchema");
const otpSchema = require("../../schema/otp");

const sendEmail = require("../../services/email.service");
const constants = require("../../utils/constants");
const catchAsyncErrors = require("../../middlewares/catchAsyncErrors");
const { generateOtp } = require("../../utils/utils");

const forgotPassword = catchAsyncErrors(async (req, res) => {
  const { email } = req.body;
  const user = await userSchema.findOne({ email });
  if (!user) {
    return res.status(constants.CODES.NOT_FOUND).json({
      status: false,
      message: `${constants.MESSAGES.USERS.NOT_FOUND} ${email}`,
    });
  }
  const otp = await generateOtp();
  const addOtp = await otpSchema.create({ userId: user.userId, otp });
  if (addOtp._id) {
    await sendEmail({
      to: email,
      subject: "Forgot Password",
      text: `Hey ${user?.firstname} ${user?.lastname} your otp for changing your password is ${otp} `,
    });
    return res.status(constants.CODES.SUCCESS).json({
      success: true,
      message: constants.MESSAGES.SIGNUP.EMAIL_SENT_SUCCESS,
    });
  } else {
    return res.status(constants.CODES.SOMETHING_WENT_WRONG).json({
      status: false,
      message: `${constants.MESSAGES.SIGNUP.FAILED_TO_CREATE_OTP}`,
    });
  }
});

const verifyOtp = catchAsyncErrors(async (req, res) => {
  const { userId, otp, newPassword } = req.body;
  const isValidOtp = await otpSchema.findOne({ userId, otp });
  if (!isValidOtp) {
    return res.status(constants.CODES.VALIDATION_FAILED).json({
      status: false,
      message: `${constants.MESSAGES.SIGNUP.OTP_INCORRECT}`,
    });
  }
  // deleting otp so user should not have multiple otps and can't reuse it.
  await otpSchema.deleteOne({ userId });

  // updating user password
  let hashedPassword = await bcrypt.hash(
    newPassword,
    Number(process.env.SALT_ROUNDS)
  );

  await userSchema.updateOne(
    { userId },
    { $set: { password: hashedPassword } }
  );

  return res.status(constants.CODES.SUCCESS).json({
    success: true,
    message: constants.MESSAGES.SIGNUP.OTP_VERIFIED,
  });
});

module.exports = {
  forgotPassword,
  verifyOtp,
};
