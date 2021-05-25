"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const dotenv_1 = require("dotenv");
const bodyParser = require("body-parser");
const errorHandler_1 = require("./libs/errorHandler");
const notFoundRoute_1 = require("./libs/notFoundRoute");
const configMiddelware_1 = require("./libs/configMiddelware");
const Database_1 = require("./libs/Database");
const router_1 = require("./router");
dotenv_1.config();
class Server extends Database_1.Database {
    constructor(config, app) {
        super();
        this.config = config;
        this.app = app;
    }
    initBodyParser() {
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // parse application/json
        this.app.use(bodyParser.json());
        this.app.use(configMiddelware_1.configMiddelware);
        // this.app.use(authMiddleware);
        this.setupRoutes();
        this.app.use(notFoundRoute_1.notFoundRoutesMiddleware);
        this.app.use(errorHandler_1.errorHandlerMiddleware);
    }
    bootstrap() {
        this.initBodyParser();
        this.open(process.env.MONGO_URL);
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
            console.log(req.config);
            res.send('i am OK');
        });
        this.app.use('/api', router_1.router);
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map