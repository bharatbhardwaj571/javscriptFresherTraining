import {iconfig} from './config/IConfig';
export class Server {
    config;
    app;
    constructor(config:iconfig,app){
        this.config = config;
        this.app = app;
    }

    bootstrap(){
        console.log(this.config.port);
        this.app.listen(this.config.port,(err)=> {
            if(err){
                console.log( 'error')
            }else{
                console.log('success');
            }
        })
        
       this.setupRoutes();
        
    }

    setupRoutes():void{
        this.app.get('/health-check',(req,res)=> {
            res.send('i am OK');
        })
    }
}
