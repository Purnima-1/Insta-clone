const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../config/keys')
const User = mongoose.model('User')
const requireLogin = require('../middleware/requireLogin')

//any protected route
// router.get('/protected', requireLogin, (req,res)=> {
//     res.send("Hello protected")
// })

//His method of register
// router.post('/signup', (req,res) => {
//   const {name,email,password} = req.body
//   if(!email || !password || !name){
//       return res.status(422).json({error: "Please add all the fields"})
//   }
//   User.findOne({email}).then((savedUser) => {
//       if(savedUser){
//           return res.status(422).json({error:"User already exists with that email"})
//       }
//       bcrypt.hash(password,10).then(hashedPassword=>{
//         const user = new User({
//             email,
//             name,
//             password:hashedPassword
//         })
//       user.save()
//       .then(user => {
//           res.json({message:"Saved successfully",
//               _id: user._id,
//               name: user.name,
//               email: user.email,
//               password: hashedPassword
//       })
//       }).catch(err => {
//           console.log('Error occured');
//            })
//     })
//     .catch(err=> console.log(err)) 
//       })
      
//   })

//my method of register
router.post('/signup', async(req,res) => {
      const {name, email,password} = req.body
      if(!email || !password){
                return res.status(422).json({error: "Please provide all credentials"})
            }
      const userExists = await User.findOne({email})
    if(userExists){
         res.status(400)
        throw new Error("User already exists")
    }
   // password is hashed in userModel
        const user = await User.create({
            name,email,
            password
        })
        if(user){
            res.status(201).json({
                message:"saved successfully",
                _id: user._id,
                name: user.name,
                email: user.email,
                password:user.password
            })
        } else{
            res.status(400)
            throw new Error("Invalid user data")
        }
    })
//his way
// router.post('/signin',(req,res) => {
//     const {email,password} = req.body
//     if(!email || !password){
//         return res.status(422).json({error: "Please provide all credentials"})
//     }
//     User.findOne({email}).then(savedUser=> {
//         if(!savedUser){
//             return res.status(422).json({error: "Invalid credentials"})
//         }
//         bcrypt.compare(password,savedUser.password)
//         .then(doMatch=> {
//             if(doMatch){
//                 //res.json({message: "Successfully signed in"})
//                 const token = jwt.sign({_id:savedUser._id}, JWT_SECRET)
//                 res.json({token})
//             } else{
//                 return res.status(422).json({error: "Invalid credentials"})
//             }
//         }).catch(err => {
//             console.log(err);
//             })
//     })
// })

//my way
router.post('/signin',async(req,res) => {
 const  {email,password} = req.body
 const user = await User.findOne({email})
if(user && await bcrypt.compare(password,user.password)){
    const generateToken = (id) => {
        return jwt.sign({id},JWT_SECRET)
    }
    return res.json({
          _id:user.id,
        email:user.email,
        name: user.name,
        password: user.password,
        token: generateToken(user._id)
    })
}else{
    res.status(401).json({error:"Invalid Credentials"})
    //throw new Error('Invalid Credentials')
}
})
module.exports = router