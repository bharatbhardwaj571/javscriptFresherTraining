"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express = require("express");
const Controller_1 = require("./Controller");
const router = express.Router();
exports.router = router;
const controller = new Controller_1.Controller();
router.get('/', controller.getController);
router.post('/', controller.postController);
router.put('/', controller.putController);
router.delete('/', controller.deleteController);
//# sourceMappingURL=routes.js.map