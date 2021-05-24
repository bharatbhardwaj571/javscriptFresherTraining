"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const bodyParser = require("body-parser");
const errorHandler_1 = require("./libs/errorHandler");
const notFoundRoute_1 = require("./libs/notFoundRoute");
const router_1 = require("./router");
class Server {
    constructor(config, app) {
        this.config = config;
        this.app = app;
    }
    initBodyParser() {
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // parse application/json
        this.setupRoutes();
        this.app.use(bodyParser.json());
        this.app.use(notFoundRoute_1.notFoundRoutesMiddleware);
        this.app.use(errorHandler_1.errorHandlerMiddleware);
    }
    bootstrap() {
        this.initBodyParser();
        this.app.listen(this.config.port, (err) => {
            if (err) {
                console.log('error');
            }
            else {
                console.log('success');
            }
        });
    }
    setupRoutes() {
        this.app.get('/health-check', (req, res) => {
            res.send('i am OK');
        });
        this.app.use('/api', router_1.router);
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map