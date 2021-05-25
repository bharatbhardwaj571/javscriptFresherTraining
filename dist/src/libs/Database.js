"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mongoose = require("mongoose");
class Database {
    open(monogURL) {
        mongoose.connect(monogURL, { useNewUrlParser: true, useUnifiedTopology: true });
        this.db = mongoose.connection;
        this.db.on('error', console.error.bind(console, 'MongoDb connection error'));
        this.db.on("connected", (err, res) => {
            console.log("mongoose is connected");
        });
    }
    disconnect() {
        this.db.close(() => {
            console.log("Mongodb connection close");
        });
    }
}
exports.Database = Database;
//# sourceMappingURL=Database.js.map