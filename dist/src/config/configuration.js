"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envConfig = void 0;
const dotenv_1 = require("dotenv");
dotenv_1.config();
exports.envConfig = Object.freeze(process.env.PORT);
//# sourceMappingURL=configuration.js.map