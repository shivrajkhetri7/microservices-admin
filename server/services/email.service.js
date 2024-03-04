const nodemail= require("nodemailer");
const constants =  require("../utils/constants");

/**
 * @function sendEmailNotification
 * @description it is to send email to single users
 */

const sendEmailNotification = async(req,res) =>{
    const { form, to , sub, text } = req.body

    const transporter = nodemail.createTransport({
        service: 'gmail',
        auth: {
        //   type: 'OAuth2',
        //   user: process.env.MAIL_USERNAME,
        //   pass: process.env.MAIL_PASSWORD,
        //   clientId: process.env.OAUTH_CLIENTID,
        //   clientSecret: process.env.OAUTH_CLIENT_SECRET,
        }        
    })

    const mail_data= {
        form, to , sub, text 
    }

    transporter.sendMail(mail_data,(error,data)=>{
        if(error){
            return res.status(constants.CODES.BAD_REQUEST).JSON({
                status: false,
                message: `${constants.MESSAGES.GENERAL.SOMETHING_WENT_WRONG}`,
            })
        }else{
            return res.status(constants.CODES.SUCCESS).JSON({
                status: true,
                message: "email successfully sent"
            })
        }
    })

}

module.exports = {
    sendEmailNotification
}
