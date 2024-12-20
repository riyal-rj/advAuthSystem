import bcryptjs from 'bcryptjs';
import crypto from 'crypto';

import { User } from "../models/User.model.js";
import { generateVerificationToken } from "../utils/generateVerificationToken.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { sendVerificationTokenEmail,
        sendWelcomeMail,
        sendPasswordResetEmail,
        sendResetSuccessfulEmail } from "../nodemailer/emails.js";

export const signup=async(req,res) =>{
    try {
     const {username,email,password}=req.body;

    //check for all credentials are given or not
    if(!username || !email || !password)
        return res.status(400).json(
            {
                status:'Failed',
                message:'All fields are required'
            });

   //check for user existence by email
   const existingUserByEmail=await User.findOne({email:email});
   if(existingUserByEmail)
       return res.status(400).json(
        {
            status:'Failed',
            message:'Email ID already exists'
        });

   //check for user existence by username
   const existingUserByUsername=await User.findOne({username:username});
   if(existingUserByUsername)
       return res.status(400).json(
        {
            status:'Failed',
            message:'Username already exists'
        });
    
    //password strength check 
    const passcodeRegex=/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!passcodeRegex.test(password))
        return res.status(400).json({
            status:'Failed',
            message:'Password must contain at least one uppercase letter, one number, and one special character',
    });

    //hashing the password
    const salt=await bcryptjs.genSalt(10);
    const hashedPassword=await bcryptjs.hash(password,salt);

    //generating the verification token
    const verificationToken=generateVerificationToken();

    const newUser=new User({
        email:email,
        username:username,
        password:hashedPassword,
        verificationToken:verificationToken,
        verificationTokenExpiresAt:Date.now() + 24*60*60*1000

    })
    
    generateTokenAndSetCookie(res,newUser._id);

    //send verification token email
    sendVerificationTokenEmail(newUser.username,newUser.email,verificationToken);

    await newUser.save();

    res.status(201).json({
        status:'success',
        message:'Data succesfully added to the database',
        user:{
            ...newUser._doc,
            password:undefined,
        }
    })

    } catch (error) {
        res.status(500).json({
            status:'Failed',
            message:error.message
        })
    }
 } 
 

export const verifyEmail=async(req,res)=>{
    try {
        const {VerifyToken}=req.body;
        const user=await User.findOne(
            {
                verificationToken:VerifyToken,
                verificationTokenExpiresAt:{$gt:Date.now()}
            });


        if(!user)
            return res.status(400).json(
                {
                    status:'Faled',
                    message:'Invalid Verification token or verfication token expired.'
                });
        
        user.isVerified=true,
        user.verificationToken=undefined;
        user.verificationTokenExpiresAt=undefined;

        await user.save();
        
        await sendWelcomeMail(user.email,user.username);
        res.status(200).json({
            status:'success',
            message:'Verification done successfully'
        });

    } catch (error) {
        res.status(500).json({
            status:'Failed',
            message:error.message
        });
    }
}

export const login=async (req,res) =>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email}).select('+password');
        if(!user)
            return res.status(400).json({
                status:'Failed',
                message:'Invalid credentials or User details do not exist.'
            });
            console.log(user);
            
        const isPasswordValid=await bcryptjs.compare(password,user.password);

        if(!isPasswordValid)
            return res.status(400).json({
                status:'Failed',
                message:'You have entered wrong password.Please enter the correct password'
            });

        generateTokenAndSetCookie(res,user._id);

        user.lastlogin=new Date();

        await user.save();

        res.status(200).json({
            status:'success',
            message:'User logged in successfully',
            user:{
                ...user._doc,
                password:undefined
            }
        });

    } catch (error) {
        res.status(500).json({
            status:'Failed',
            message:error.message
        });
    }
} 


export const logout=async(req,res) =>{
    try {
        res.clearCookie('authToken');
        res.status(200).json({
         status:'success',
         message:'User logged out successfully.'
        });
     } catch (error) {
         console.log('Error in logout controller',error.message);
         res.status(500).json({
             status:'Failed to logout',
             message:error.message,
         });
     }
} 


export const forgotPassword=async(req,res)=>{
    const {email}=req.body;
    try {
        const user=await User.findOne({email:email});
        if(!user)
            return res.status(400).json({
                status:'Failed',
                message:'User does not exist!'
            });
        const resetToken=crypto.randomBytes(20).toString("hex");
        const resetTokenExpiresAt=Date.now()+1*60*60*1000;//valid till 1 hr

        user.resetPasswordToken=resetToken;
        user.resetPasswordExpiresAt=resetTokenExpiresAt;

        await user.save();

        await sendPasswordResetEmail(user.email,user.username,resetToken);

        res.status(200).json({
            status:'success',
            message:'Password reset token sent succesfully.'
           });
    } catch (error) {
        console.log('Error in forgot password controller',error.message);
         res.status(500).json({
             status:'Failed to access forgot-password operation',
             message:error.message,
         });
    }
}

export const resetPassword=async(req,res)=>{
try {
    const {token}=req.params;
    const {password}=req.body;

    const user=await User.findOne({
        resetPasswordToken:token,
        resetPasswordExpiresAt: {$gt:Date.now()}
    });

    if(!user)
        return res.status(400).json({
            status:'Failed',
            message:'User does not exist!'
        });

    //hashing the password
    const salt=await bcryptjs.genSalt(10);
    const hashedPassword=await bcryptjs.hash(password,salt);

    user.password=hashedPassword;
    user.resetPasswordToken=undefined;
    user.resetPasswordExpiresAt=undefined;

    await user.save();

    await sendResetSuccessfulEmail(user.email,user.username);

    res.status(200).json({
        status:'success',
        message:'Password reset done succesfully.'
       });
} catch (error) {
    console.log('Error in reset password controller',error.message);
         res.status(500).json({
             status:'Failed to access reset-password operation',
             message:error.message,
         });
}
}