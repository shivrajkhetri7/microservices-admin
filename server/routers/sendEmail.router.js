const router=  require("express").Router()
const {sendEmailNotification} = require("../services/email.service");

router.post("/sendEmail", sendEmailNotification)

module.exports = router;