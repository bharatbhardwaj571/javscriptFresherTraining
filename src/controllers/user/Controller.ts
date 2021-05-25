export class userController {
    
    deleteController(req,res){
        res.send(' delete the data')
    }

    postController(req,res){
        res.send('post the data');
    }

    putController(req,res){
        res.send('put the put')
    }
    getController(req,res){
        res.send('get the data')
    }
}