import jwt from 'jsonwebtoken';
import { ENV_VARS } from '../config/envVars.js';
export const generateTokenAndSetCookie=(res,userId)=>{
    const jwtToken=jwt.sign(
        {userId},
        ENV_VARS.JWT_SECRET_TOKEN,
        {
            expiresIn:'5d',
        }
    );

    res.cookie(
        'authToken',
        jwtToken,
        {
            httpOnly:true, //accesible thorugh browser and not  js 
            maxAge:5*24*60*60*1000, // 5days in milliseconds
            secure:ENV_VARS.NODE_ENV !== 'development',
            sameSite:"strict" //to prevent cross-site request forgery
        }
    )

    return jwtToken;
}