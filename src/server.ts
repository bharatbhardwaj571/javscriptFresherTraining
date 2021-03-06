import {iconfig} from './config/IConfig';
import {config} from 'dotenv';
import bodyParser = require('body-parser');
import {errorHandlerMiddleware} from './libs/errorHandler';
import {notFoundRoutesMiddleware} from './libs/notFoundRoute';
import {configMiddelware} from './libs/configMiddelware';
import {authMiddleware} from './libs/routes/authMiddleWare';
import {Database} from './libs/Database';
import {router} from './router';
import {userRouter} from './controllers/user/index';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

config();

export class Server extends Database {
    config;
    app;
    constructor(config:iconfig,app){
        super();
        this.config = config;
        this.app = app;
    }

    initBodyParser(){
       this.app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
        this.app.use(bodyParser.json())
        this.app.use(configMiddelware)
       
        this.setupRoutes();
      
        this.app.use(notFoundRoutesMiddleware)
        this.app.use(errorHandlerMiddleware)

        
    }

    bootstrap(){
        this.initBodyParser();
        this.open(process.env.MONGO_URL);
        this.app.listen(this.config.port,(err)=> {
            if(err){
                console.log( 'error')
            }else{
                console.log('success');
            }
        })
        
 
    
        
    }

    setupRoutes():void{
        this.app.get('/health-check',(req,res)=> {
            console.log(req.config);
            res.send('i am OK');
        })

        this.app.use('/api',authMiddleware,router);
        this.app.use('/user',userRouter);
     
    }
}
