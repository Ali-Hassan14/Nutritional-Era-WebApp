const express = require('express');
const router = express.Router();
const {check,validationResult}=require('express-validator'); 
const bcrypt=require('bcryptjs');
const jwt =require('jsonwebtoken')
var gravatar = require('gravatar');
const config=require('config')
// const { exists } = require('../../models/Users.Js');
const User=require('../../models/User')
router.post('/',check('uname','Name is requires').not().isEmpty(),
check('email','Email is required, Enter valid Email Address').isEmail(),
check('password','Please Enter a password with 6 or more characters').isLength({min:6})
, 
async(req,res) => {
   const errors=validationResult(req);
   if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
   }
   const {uname,email,password}=req.body;
try{
    //   <!!!!!!!!!........... See if User Exists..............!!!!!!!!!!>
    let user=await User.findOne({email});
    if(user){
        return res.status(400).json({errors:[{msg:'User Already Existed'}]});
    }
//   <!!!!!!!!!........... Get Users Gravatar..............!!!!!!!!!!>
const avatar=gravatar.url(email,{
    s:'200',
    r:'pg',
    d:'mm'
})

    user=new User({
        uname,
        email, 
        avatar,
        password
    });
//   <!!!!!!!!!........... Encrypt Password..............!!!!!!!!!!>
const salt=  await bcrypt.genSalt(10);
user.password= await bcrypt.hash(password,salt);
 await user.save();
//  res.send('User Registered');
//   <!!!!!!!!!........... Return Jason Web Token..............!!!!!!!!!!>
    const payload ={
        user:{
            id:user.id
        }
    };
    jwt.sign(
        payload, config.get('jwtSecret'),
        { expiresIn:'3600'},(err, token)=>{
            if(err) throw err;
            res.json({token});
        });
}catch(err){
    console.error(err.message);
    res.status(500).send('Server Error')
}

});
module.exports=router;