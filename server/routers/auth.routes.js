const router = require("express").Router();
const {
  signUpController,
  signInController,
} = require("../controllers/auth/auth.controller");
const { verifyToken } = require("../middlewares/permissions");

/**
 *  *** User signup router
 */
router.post("/signup", signUpController);

/**
 *  *** User Login Router
 */
router.post("/signin", signInController);

// TODO

// using verifytoken : router.post("path",verifyToken,controller-function);

/**
 *  1.  update the User details API // Like add the Profile Picture // First Name // Last Name
 *  2 . Add The expense details //
 */
module.exports = router;
