const User = require('../models/User');
const jwt = require('jsonwebtoken');
const secret = require('../config/config');

exports.protect = async(req,res,next)=>{
    let token;
    if(!req.headers.authorization ){
        res.status(401).json({
            success:false,
            data:"No authorized to access this route "
        })
    }
    token = req.headers.authorization.split(' ')[1];
    if(!token){
        res.status(403).json({
            success:false,
            data:"No authorized "
        })
    }
    try {
      jwt.verify(token, secret.JWT_SECRET,(err,decoded)=>{
        if(err){
            throw err;
        }else{
            User.findById({_id:decoded.id})
           next();
        }
      });
    } catch (error) {
        res.status(401).json({
            success:false,
            data:"No authorized to access this route"
        })
    }
}



