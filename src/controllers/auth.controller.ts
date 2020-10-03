import {Request,Response} from 'express';
import jwt from 'jsonwebtoken'




export const signup= async(req:Request,res:Response)=>{

    const user ={
        username :req.body.username,
        email:req.body.email,
        password:req.body.password
    };
    
    
    const token=jwt.sign({user:user},process.env.TOKEN_SECRET|| 'tokenTest') ;
    

    res.json(token);

};
