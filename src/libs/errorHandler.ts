export const errorHandlerMiddleware=(err,req,res,next) => {
if(err){

    res.send({
   
        error: "not found",
        message: err.message,
        status: err.stat,
        timestamp: "2019-01-08T17:38:21.929Z"
    })
}
next();
   
}