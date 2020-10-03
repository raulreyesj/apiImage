import {Request,Response,NextFunction} from 'express'
import jwt from 'jsonwebtoken'

export const TokenValidation=(req:Request,res:Response,next:NextFunction)=>{
    const token =req.header('token');
    console.log(Object.keys(req.headers));
    if(!token) return res.status(401).json('Access denied');

    const payload=jwt.verify(token,process.env.TOKEN_SECRET || 'tokentest')

    next();

};