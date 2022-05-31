const jwt = require('jsonwebtoken')
 const {JWT_SECRET} = require('../config/keys')
 const mongoose = require('mongoose')
 const User = mongoose.model('User')

 //both ways mixed
module.exports = async(req,res,next) => {
    let token
    const {authorization} = req.headers
    if(!authorization){
        res.status(401).json({error: "You must be logged in"})
    }
       else if(authorization && authorization.startsWith('Bearer')){
       token = authorization.split(' ')[1]
       const decoded = jwt.verify(token,JWT_SECRET)
       req.user = await User.findById(decoded.id).select('-password')
       next()
    }
}
