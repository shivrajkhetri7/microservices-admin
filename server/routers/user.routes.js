const router = require("express").Router();

const {
  forgotPassword,
  verifyOtp,
} = require("../controllers/user/user.controller");

/**
 *  *** User forgot password route
 */
router.post("/forgot-password", forgotPassword);

/**
 *  *** User verify otp Router
 */
router.post("/verify-otp", verifyOtp);

// TODO

// using verifytoken : router.post("path",verifyToken,controller-function);

/**
 *  1.  update the User details API // Like add the Profile Picture // First Name // Last Name
 *  2 . Add The expense details //
 */
module.exports = router;
