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

module.exports = router;
