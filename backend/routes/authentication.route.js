import express from "express";

import {
    signup,
    login,
    logout,
    verifyEmail,
    forgotPassword,
    resetPassword
} from './../controllers/authentication.controller.js';

const router=express.Router();

//all the routes
router.post('/signup',signup);
router.post('/login',login);
router.post('/logout',logout);

router.post('/verifyEmail',verifyEmail);

router.post('/forgot-password',forgotPassword);
router.post('/reset-password/:token',resetPassword);

export default router;