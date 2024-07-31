const errorHandler = (err,req,res,next)=>{
    console.error("Encountering erorr concepts : ",err.message);
    res.status(err.status || 500 ).json(
        {
            message:err.message
        }
    );

}

module.exports= errorHandler;