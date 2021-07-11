const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
dotenv.config({ path:'./config.env' }); //securing passward of database

require('./db/conn');

app.use(express.json());

app.use(cookieParser());



app.use(require('./router/auth'));//we link the router files to make route easy

const PORT = process.env.PORT;




//middleware to check user logged  or not

// const middlewarre = (req,res,next) => {
//     console.log('hello my middleware');
//     next();
// }


// app.get('/',(req,res) =>{
//     res.send(`Hello world from the server app.js`);

// }); //route of the file like homepage,etc.
// app.get('/about',middlewarre,(req,res) =>{
//     // console.log('hello my about');
//     res.send('Hello about from the server');

// });
app.get('/profile',(req,res) =>{
    // res.cookie("Test",'rutvik');
    console.log(`this is the cookie awesome ${req.cookies.jwt}`)
    res.send('Hello profile from the server');


});
app.get('/logout',(req,res) =>{
    // res.cookie("Test",'rutvik');
    res.send('Hello logout from the server');

});
app.get('/contact',(req,res) =>{
    // res.cookie("Test",'rutvik');
    res.send('Hello contact from the server');

});
app.get('/signin',(req,res) =>{
    res.send('Hello login from the server');

});
app.get('/signup',(req,res) =>{
    res.send('Hello register from the server');

});

app.listen(PORT, ()=>{
    console.log(`server is running on port number ${PORT} `)
});






