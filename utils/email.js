const nodemailer = require('nodemailer');
const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS } = process.env;


const transporter = nodemailer.createTransport({
host: EMAIL_HOST,
port: Number(EMAIL_PORT) || 587,
secure: false,
auth: {
user: EMAIL_USER,
pass: EMAIL_PASS,
},
});


async function sendOtpEmail(to, otp) {
const mailOptions = {
from: `"No Reply" <${process.env.EMAIL_USER}>`,
to,
subject: 'Your verification code',
text: `Your verification code is: ${otp}. It will expire in ${process.env.OTP_EXPIRES_MIN || 10} minutes.`,
html: `<p>Your verification code is: <strong>${otp}</strong></p>
<p>It will expire in <strong>${process.env.OTP_EXPIRES_MIN || 10} minutes</strong>.</p>`
};


return transporter.sendMail(mailOptions);
}


module.exports = { sendOtpEmail };