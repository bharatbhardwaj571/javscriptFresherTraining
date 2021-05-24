"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundRoutesMiddleware = void 0;
const notFoundRoutesMiddleware = (req, res, next) => {
    if (!req.route) {
        return next(new Error('Not found'));
    }
    next();
};
exports.notFoundRoutesMiddleware = notFoundRoutesMiddleware;
//# sourceMappingURL=notFoundRoute.js.map