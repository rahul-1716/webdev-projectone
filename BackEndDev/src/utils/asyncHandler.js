const asyncHandler = (fn) => {
  return async (err,req,res,next) => {
        try {
          await fn(err,req,res,next)  
        } catch (err) {
            res.status(err.code || 500).json({
                success: false,
                message: err.message
            })
            console.log("Error :", err);
            
        }
    }
}

const promiseHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req,res, next)).catch((err) => next(err))
    }
}





export { asyncHandler, promiseHandler }