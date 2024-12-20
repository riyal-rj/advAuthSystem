import nodemailer from 'nodemailer';
import { ENV_VARS } from '../config/envVars.js';

const sendEmail=async(options)=>{
  const transporter=nodemailer.createTransport({
    host:ENV_VARS.SMTP_HOST,
    port:ENV_VARS.SMTP_PORT,
    secure:true,
    service:ENV_VARS.SMTP_SERVICE,
    auth:{
      user:ENV_VARS.SMTP_MAIL,
      pass:ENV_VARS.SMTP_PASSWORD
    }
  });

  const mailOptions={
    from:ENV_VARS.SMTP_MAIL,
    to:options.email,
    subject:options.subject,
    html:options.message,
  }

  await transporter.sendMail(mailOptions);
};
export default sendEmail;
