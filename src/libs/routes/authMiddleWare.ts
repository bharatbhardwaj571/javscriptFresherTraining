import jwt = require('jsonwebtoken');
import {config} from 'dotenv';

config();


export const authMiddleware =(req,res,next) => {
    const authHeader = req.headers.authorization;
    
    if(authHeader) {
        const token = authHeader.split(' ')[1];
        const secretKey = process.env.SECRET_KEY;
        jwt.verify(token,secretKey,(err,user) => {
            if(err) {
                console.log(err);
                return err;

            }
            console.log(user)
            req.user = user;
            next();
        })
    }
}