const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const constants = require("../../utils/constants");

const { signUpValidator } = require("../../validators/signup-validator");
const userSchema = require("../../schema/userSchema");
const catchAsyncError = require("../../middlewares/catchAsyncErrors");
const { encode, decode } = require("../../services/auth.service");

const generateUserId = async () => {
  const uniqueId = uuidv4();
  return uniqueId;
};

const signUpController = catchAsyncError(async (req, res) => {
  const userId = await generateUserId();
  let payload = req.body;
  const user = await userSchema.findOne({ email: payload?.email });
  if (user) {
    res.status(constants.CODES.BAD_REQUEST).json({
      status: false,
      message: `${constants.MESSAGES.USERS.EMAIL_ALREADY_EXISTS}  :${payload?.email}`,
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

  response.password = null;
  response.token = await encode({ userId: response.userId, email });
  return res.status(constants.CODES.SUCCESS).json({
    success: true,
    message: constants.MESSAGES.USERS.USER_LOGIN_SUCCESS,
    data: response,
  });
});

module.exports = {
  signUpController,
  signInController,
};
