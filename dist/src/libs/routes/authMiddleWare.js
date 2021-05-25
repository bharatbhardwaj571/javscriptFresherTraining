"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jwt = require("jsonwebtoken");
const dotenv_1 = require("dotenv");
dotenv_1.config();
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        const secretKey = process.env.SECRET_KEY;
        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                console.log(err);
                return err;
            }
            console.log(user);
            req.user = user;
            next();
        });
    }
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=authMiddleWare.js.map