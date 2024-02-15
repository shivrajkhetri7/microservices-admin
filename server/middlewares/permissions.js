const userSchema = require("../schema/userSchema");
const { decode } = require("../services/auth.service");
const constants = require("../utils/constants");
const catchAsyncErrors = require("./catchAsyncErrors");

exports.verifyToken = catchAsyncErrors(async (request, response, next) => {
  if (!request?.headers?.authorization) {
    return response.status(constants.CODES.UNAUTHORIZED).json({
      status: false,
      message: constants.MESSAGES.GENERAL.TOKEN_REQUIRED,
    });
  }
  const decoded = await decode(request?.headers?.authorization);

  const user = await userSchema.findOne({ email: decoded?.email });
  if (!user) {
    return response.status(constants.CODES.UNAUTHORIZED).json({
      status: false,
      message: constants.MESSAGES.GENERAL.INVALID_TOKEN,
    });
  }
  request.user = decoded;
  return next();
});
