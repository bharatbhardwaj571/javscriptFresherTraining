"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        unique: true,
        required: true
    }
}, { timestamps: true });
const User = mongoose.model('User', userSchema);
exports.default = User;
//# sourceMappingURL=UserSchema.js.map