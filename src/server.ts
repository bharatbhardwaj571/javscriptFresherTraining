import {iconfig} from './config/IConfig';
import bodyParser = require('body-parser');
import {errorHandlerMiddleware} from './libs/errorHandler';
import {notFoundRoutesMiddleware} from './libs/notFoundRoute';
export class Server {
    config;
    app;
    constructor(config:iconfig,app){
        this.config = config;
        this.app = app;
    }

    initBodyParser(){
       this.app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
        this.setupRoutes();
        this.app.use(bodyParser.json())
        this.app.use(notFoundRoutesMiddleware)
        this.app.use(errorHandlerMiddleware)

        
    }

    bootstrap(){
        this.initBodyParser();
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
            res.send('i am OK');
        })
    }
}
