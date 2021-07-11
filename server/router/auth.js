const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require("../middleware/authenticate");


require('../db/conn');
const User = require("../model/userSchema");


router.get('/',authenticate,(req,res) =>{
    res.send(`Hello world from the server router js`);
});
//using promises
// router.post('/register',async (req,res) => {

//     const{name,email,phone,work,password,cpassword} = req.body;

//     //checking data is empty or not
//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error:"plz fill the fields properly"})
//     }
//     //check user is already exist or not
//     User.findOne({email:email})
    
//     .then((userExist) => {
//         if(userExist){
//             return res.status(422).json({error:"email already exist"})
//         }

//         const user = new User({name,email,phone,work,password,cpassword});

//         user.save().then(() => {
//             res.status(422).json({message:"user registered success"});

//         }).catch((err) => res.status(422).json({error:"failed to register"}));
//     }).catch(err => {
//         console.log(err);
//     });


    // console.log(name);
    // console.log(email);
    //res.json({message:req.body})
    // res.send('register page')
// });

//using Async-Await

router.post('/register',async (req,res) => {

    const{name,email,phone,work,password,cpassword} = req.body;

    //checking data is empty or not
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:"plz fill the fields properly"})
    }

    try{
        
    const userExist = await User.findOne({email:email})

     if(userExist){
            return res.status(422).json({error:"email already exist"})
        }
       else if(password != cpassword){
           return res.status(422).json({error:"password are not matching"})
       }else{
            const user = new User({name,email,phone,work,password,cpassword});
            await user.save();
            res.status(201).json({message:"user registered success"});

       }

   

    


    }catch (err){
        console.log(err);
        
    }
   
   
   
   
    });

//login route

router.post('/signin',async(req,res)=> {
    try{
        let token;
        const{ email, password } = req.body;
        if (!email || !password){
            return res.status(400).json({error:"please fill the data"})
        }

        const userLogin = await User.findOne({email:email});

        // console.log(userLogin);
        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password);

            token = await userLogin.generateAuthToken(); //return a promise

            console.log(token);

            res.cookie("jwtoken",token,{
                expires:new Date(Date.now() + 25892000000),
                httpOnly: true //30 days expired
            });


        if(!isMatch){
             res.status(400).json({error:"Invalid Credientials pass"});
        }else{
             res.json({message:"user signin success"});

        }
        }else{
            res.status(400).json({error:"Invalid Credientials"});
        }
        
        

    }catch(err){
        console.log(err);
    }
    

});

// Profile page

router.get('/profile',authenticate, (req,res) =>{
   
   
    res.send(req.rootUser);

});

// Logout page

router.get('/logout', (req,res) =>{
  console.log(`Hello my Logout page`);
   res.clearCookie('jwtoken',{path:'/'});
   res.status(200).send('user logout');

});

module.exports = router;

