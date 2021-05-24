export const notFoundRoutesMiddleware =(req,res,next) => {
    if(!req.route){
        return next(new Error('Not found'))
    }
    next();
}