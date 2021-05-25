import {iconfig} from './config/IConfig';
import bodyParser = require('body-parser');
import {errorHandlerMiddleware} from './libs/errorHandler';
import {notFoundRoutesMiddleware} from './libs/notFoundRoute';
import {configMiddelware} from './libs/configMiddelware';
import {authMiddleware} from './libs/routes/authMiddleWare';
import {router} from './router';

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
        this.app.use(bodyParser.json())
        this.app.use(configMiddelware)
        this.app.use(authMiddleware);
        this.setupRoutes();
      
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
            console.log(req.config);
            res.send('i am OK');
        })

        this.app.use('/api',router);
     
    }
}
