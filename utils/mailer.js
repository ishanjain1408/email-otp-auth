const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

async function sendOtpEmail(toEmail, otp) {
  const from = process.env.FROM_EMAIL;
  const subject = 'Your verification OTP';
  const text = `Your verification code is: ${otp}. It will expire in ${process.env.OTP_EXPIRATION_MINUTES || 10} minutes.`;
  const html = `<p>Your verification code is: <b>${otp}</b></p><p>It will expire in ${process.env.OTP_EXPIRATION_MINUTES || 10} minutes.</p>`;

  const info = await transporter.sendMail({
    from,
    to: toEmail,
    subject,
    text,
    html
  });

  return info;
}

module.exports = { sendOtpEmail };
