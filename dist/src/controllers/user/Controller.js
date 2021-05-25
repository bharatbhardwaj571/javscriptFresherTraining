"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const UserSchema_1 = require("../../repositories/user/UserSchema");
const jwt = require("jsonwebtoken");
const dotenv_1 = require("dotenv");
dotenv_1.config();
class userController {
    deleteController(req, res) {
        res.send(' delete the data');
    }
    postController(req, res) {
        if (!req.body) {
            return res.send('error');
        }
        const { username, email, password } = req.body;
        const accessToken = jwt.sign({ username: username, email: email }, process.env.SECRET_KEY);
        const user2 = new UserSchema_1.default({
            username,
            email,
            password
        });
        user2.save();
        res.json({
            accessToken
        });
    }
    putController(req, res) {
        res.send('put the put');
    }
    getController(req, res) {
        res.send('get the data');
    }
}
exports.userController = userController;
//# sourceMappingURL=Controller.js.map