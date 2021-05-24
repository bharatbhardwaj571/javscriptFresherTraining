"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
class Controller {
    deleteController(req, res) {
        res.send(' delete the data');
    }
    postController(req, res) {
        res.send('post the data');
    }
    putController(req, res) {
        res.send('put the put');
    }
    getController(req, res) {
        res.send('get the data');
    }
}
exports.Controller = Controller;
//# sourceMappingURL=Controller.js.map