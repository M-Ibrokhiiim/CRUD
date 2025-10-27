const ErrorHandler = (err,req,res,next)=>{
    res.status(400).send({success:false,msg:err.message || 'Error occured'})
    next()
}

export  default ErrorHandler