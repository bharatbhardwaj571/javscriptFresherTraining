import mongoose = require('mongoose');
import {seedInitialData} from './seedsData';

export class Database {
    db

    open(monogURL) {
        mongoose.connect(monogURL,{useNewUrlParser: true, useUnifiedTopology: true});
        this.db = mongoose.connection;

        this.db.on('error',console.error.bind(console,'MongoDb connection error'))

        this.db.on("connected",(err,res)=> {
            seedInitialData();
            console.log("mongoose is connected")
        })
        
        
    }

    disconnect(){
        this.db.close(()=> {
            console.log("Mongodb connection close")
        })
    }
}