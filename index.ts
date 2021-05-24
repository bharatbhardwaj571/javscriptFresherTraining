export {}
import {Server} from './src/server';
import express = require('express');
import {envConfig} from './src/config/configuration';
const app = express()
const config={
    port : Number(envConfig)
}
const server = new Server(config,app);
server.bootstrap();


