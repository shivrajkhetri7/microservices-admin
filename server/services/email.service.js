const nodemailer = require("nodemailer");

function sendEmail(userData) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: userData.to,
      subject: userData.subject,
      text: userData.text,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error: ", error);
        reject(error);
      } else {
        console.log("mailer response: ", info.response);
        resolve(info.response);
      }
    });
  });
}

module.exports = sendEmail;
