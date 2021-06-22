const User = require('../models/User');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const config = require('../config/config');

exports.register=async(req,res,next)=>{
   const salt =await bcrypt.genSaltSync(12);
   const password =await bcrypt.hashSync(req.body.password, salt)
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    await user.save()
      .then(()=>{
       res.status(201).json({
            success:true,
            data:user
        })
    })
    .catch((err)=>{
        res.status(500).json({
            success:false,
             data:err
        })
    })
}

exports.login = async(req,res,next)=>{
    await User.findOne({email:req.body.email}, (err,user)=>{
        if(err){
            res.send(err)
        }
        if(!user){
            res.status(404).json({
                success:false,
                data:'User not found'
            })
        }
        if(!bcrypt.compareSync(req.body.password, user.password)){
            res.status(401).json({
                success:false,
                data:'Invalid parol'
            })
        }
        console.log(user._id)
        let token;
        let payload = {id:user._id}
        token = JWT.sign(payload, config.JWT_SECRET);
        res.status(200).json({
            token:token
        })
    })
}

exports.getMe = async(req,res,next)=>{
    const token = req.headers.authorization
    let probel=token.indexOf(' ');
    const me = JWT.decode(token.slice(probel+1))
    user = await User.findOne({_id:me.id})
    .select({password:0})
    res.send(user);
}