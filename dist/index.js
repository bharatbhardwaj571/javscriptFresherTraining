"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./src/server");
const express = require("express");
const configuration_1 = require("./src/config/configuration");
const app = express();
const config = {
    port: Number(configuration_1.envConfig)
};
const server = new server_1.Server(config, app);
server.bootstrap();
//# sourceMappingURL=index.js.map