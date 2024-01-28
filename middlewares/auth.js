const jwt = require("jsonwebtoken")

exports.verifytoken = (req,res,next)=>{ // token verifing

    const {token}= req.cookies
    if(!token){
       return res.status(401).json({
            success: false,
            message : "Unauthorize request",
            isAuthenticate : false
        })
    }

  jwt.verify(token,process.env.JWT_SECRET_KEY,(err,decoded)=>{

    if(err){
        return res.status(404).json({
           success : false,
           message : "invalid token" ,
           isAuthenticate : false
        })
    }
     req.userId = decoded.id;
     next()
  })

  
}