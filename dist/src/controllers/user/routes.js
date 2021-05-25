"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express = require("express");
const Controller_1 = require("./Controller");
const userRouter = express.Router();
exports.userRouter = userRouter;
const controller = new Controller_1.userController();
userRouter.get('/', controller.getController);
userRouter.post('/', controller.postController);
userRouter.put('/', controller.putController);
userRouter.delete('/', controller.deleteController);
//# sourceMappingURL=routes.js.map