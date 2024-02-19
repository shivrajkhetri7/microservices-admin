const router=  require("express").Router()
const {sendEmailNotification} = require("../controllers/email/emailcontroller");

router.post("/sendEmail", sendEmailNotification)

module.exports = router;