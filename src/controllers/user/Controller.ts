import User from '../../repositories/user/UserSchema';
import jwt = require('jsonwebtoken');
import {config} from 'dotenv';

config();

export class userController {
    
    deleteController(req,res){
        res.send(' delete the data')
    }

    postController(req,res){
        if(!req.body){
            
            return res.send('error')
        }


        const {username,email,password} = req.body;

       
 
            const accessToken = jwt.sign({ username: username,  email:email }, process.env.SECRET_KEY);
            const user2 = new User({
            username,
            email,
            password
            })

            user2.save();
            res.json({
                accessToken
            })
      
        
       

        

    }

    putController(req,res){
        res.send('put the put')
    }
    getController(req,res){
        res.send('get the data')
    }
}