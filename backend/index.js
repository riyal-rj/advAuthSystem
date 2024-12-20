import express from 'express';
import dotenv from 'dotenv';
import { ENV_VARS } from './config/envVars.js';
import { connectDB } from './config/connectDb.js';
import authRoutes from './routes/authentication.route.js'
import cookieParser from 'cookie-parser';

const app=express();

app.use(express.json()); // middleware to access or parse the req.body
app.use(cookieParser());


app.use('/api/auth',authRoutes)

const port=ENV_VARS.PORT;
app.listen(port,()=>{
    connectDB();
    console.log(`Server started at port ${port}`);
    
});
