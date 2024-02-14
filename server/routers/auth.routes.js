const router = require("express").Router();
const {
  signUpController,
  signInController,
} = require("../controllers/auth/auth.controller");

/**
 *  *** User signup router
 */
router.post("/signup", signUpController);

/**
 *  *** User Login Router
 */
router.post("/signin", signInController);

// TODO

/**
 *  1.  update the User details API // Like add the Profile Picture // First Name // Last Name
 *  2 . Add The expense details //
 */
module.exports = router;
