import { VERIFICATION_EMAIL_TEMPLATE, WELCOME_MAIL_TEMPLATE,
    RESET_PASSWORD_SUCCESSFUL_TEMPLATE,RESET_PASSWORD_TOKEN_TEMPLATE
 } from "./emailTemplate.js";
import sendEmail from "./nodemailer.config.js";

export const sendVerificationTokenEmail=async (username,email,userVerificationToken)=>{
    try {
        await sendEmail({
            email:email,
            subject:'Verification of Email',
            message:VERIFICATION_EMAIL_TEMPLATE.replace('{username}',username)
                                      .replace('{verificationCode}',userVerificationToken)
        });
        console.log('Email sent successfully:  ');
    } catch (error) {
        console.log(`Error sending verfication email: ${error}`);
        throw new Error(`Error sending verfication email: ${error}`)
    }
}

export const sendWelcomeMail=async (userEmail,username)=>{
    try {
        await sendEmail({
            email:userEmail,
            subject:'Welcome Email',
            message:WELCOME_MAIL_TEMPLATE.replace('{username}',username),
        });

        console.log('Welcome email sent successfully!');
    } catch (error) {
        console.log(`Error sending welcome email: ${error}`);
        throw new Error(`Error sending welcome email: ${error}`)
    }
}

export const sendPasswordResetEmail=async(userEmail,username,resetToken)=>{
    try {
        await sendEmail({
            email:userEmail,
            subject:'Password Reset Email',
            message:RESET_PASSWORD_TOKEN_TEMPLATE.replace('{username}',username).replace('{resetToken}',resetToken),
        });

        console.log('Password Reset Token email sent successfully!');
    } catch (error) {
        console.log(`Error sending password reset email: ${error}`);
        throw new Error(`Error sending password reset  email: ${error}`)
    }
}


export const sendResetSuccessfulEmail=async(userEmail,username)=>{
    try {
        await sendEmail({
            email:userEmail,
            subject:'Password Reset Successful',
            message:RESET_PASSWORD_SUCCESSFUL_TEMPLATE.replace('{username}',username),
        });

        console.log('Passowrd Reset Successful Email sent successfully!');
    } catch (error) {
        console.log(`Error sending password reset successful email: ${error}`);
        throw new Error(`Error sending password reset successful email: ${error}`)
    }
}