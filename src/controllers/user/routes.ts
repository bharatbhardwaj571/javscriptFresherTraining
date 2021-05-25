import express = require('express');
import {userController} from './Controller';

const userRouter = express.Router();
const controller = new userController();

userRouter.get('/',controller.getController);
userRouter.post('/',controller.postController);
userRouter.put('/',controller.putController);
userRouter.delete('/',controller.deleteController);

export {
    userRouter
}
