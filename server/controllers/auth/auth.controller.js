const bcrypt = require("bcrypt");

const userSchema = require("../../schema/userSchema");

const constants = require("../../utils/constants");
const sendEmail = require("../../services/email.service");
const catchAsyncError = require("../../middlewares/catchAsyncErrors");
const { signUpValidator } = require("../../validators/signup-validator");
const { encode } = require("../../services/auth.service");
const { generateUserId } = require("../../utils/utils");

const signUpController = catchAsyncError(async (req, res) => {
  const userId = await generateUserId();
  let payload = req.body;
  const user = await userSchema.findOne({ email: payload?.email });
  if (user) {
    return res.status(constants.CODES.BAD_REQUEST).json({
      status: false,
      message: `${constants.MESSAGES.USERS.EMAIL_ALREADY_EXISTS} ${payload?.email}`,
    });
  }
  const validatePayload = {
    firstname: payload?.firstname,
    lastname: payload?.lastname,
    email: payload?.email,
    phone: payload?.phone,
    userId: userId,
  };
  // Validate the document
  await signUpValidator(validatePayload);

  // Hash the password
  let hashedPassword = await bcrypt.hash(
    payload?.password,
    Number(process.env.SALT_ROUNDS)
  );
  validatePayload.password = hashedPassword;

  const response = await userSchema.create(validatePayload);
  // console.log("response: ", response);
  if (response?._id) {
    await sendEmail({
      to: payload?.email,
      subject: "Signup Successfull!!!!",
      text: `Hey ${payload?.firstname} ${payload?.lastname} Welcome to BACHAT! Congratulations you have successfully signedup. `,
    });
  }
  response.password = null;
  return res.status(constants.CODES.SUCCESS).json({
    success: true,
    message: constants.MESSAGES.SIGNUP.SIGNUP_COMPLETED,
    data: response,
  });
});

const signInController = catchAsyncError(async (req, res) => {
  const { email, password } = req.body;

  const response = await userSchema.findOne({ email });
  if (!response) {
    res.status(constants.CODES.NOT_FOUND).json({
      status: false,
      message: `${constants.MESSAGES.USERS.NOT_FOUND}:${email}`,
    });
  }

  if (!bcrypt.compareSync(password, response?.password)) {
    res.status(constants.CODES.CONFLICT).json({
      status: false,
      message: `${constants.MESSAGES.AUTH.INCORRECT_PASSWORD}:${password}`,
    });
  }

  const token = await encode({ userId: response.userId, email });

  const responseObject = {
    _id: response._id,
    userId: response.userId,
    firstname: response.firstname,
    lastname: response.lastname,
    email: response.email,
    token: token,
  };

  return res.status(constants.CODES.SUCCESS).json({
    success: true,
    message: constants.MESSAGES.USERS.USER_LOGIN_SUCCESS,
    data: responseObject,
  });
});

module.exports = {
  signUpController,
  signInController,
};
