import nodemailer from 'nodemailer';

import { FormInfo } from './contact.model.js';

async function sendEmail(emailInfo: FormInfo) {
  const { fullname, email, message } = emailInfo;
  
  // Create the transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.PORTFOLIO_EMAIL,
      pass: process.env.PORTFOLIO_EMAIL_PASSWORD
    },
  });

  // Configure email options
  const mailOptions = {
    from: process.env.PORTFOLIO_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Incoming Message from ${fullname} [${email}]`,
    text: message,
  };

  // Send the email
  try {
    const info = await transporter.sendMail(mailOptions);
  } catch (error: any) {
    throw new Error('Failed to send email: ' + error.message);
  }
}

  
export default sendEmail;
