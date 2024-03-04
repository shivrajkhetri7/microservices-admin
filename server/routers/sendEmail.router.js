const router=  require("express").Router()
const { sendEmailNotification } = require("../services/email.service");

router.post("/sendEmail", function(req,res){sendEmailNotification(req,res)})

module.exports = router;