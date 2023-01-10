const express = require('express');
const auth_routes = express.Router();
const product = require('./product.routes');
auth_routes.use(product);
const uploader =require('../app/middleware/uploader.middleware')

//calling Ctrler
const AuthController = require('../app/controller/auth.controller');
const auth_ctrl = new AuthController();

auth_routes.post("/login", auth_ctrl.loginUser)

auth_routes.post("/register",uploader.single('image'), auth_ctrl.registerUser);

auth_routes.post("/logout", auth_ctrl.logoutUser)

module.exports = auth_routes;
// {
    
// const loginCheck = (req, res, next)=>{
//     //if i am a logged in user, respond my data 
//     // if iam not logged in user, request to login
//              //login check
    
//      next();    //throw exception ==> next({})

//     res.status(401).json({
//         result: null,
//         status: false,
//         msg: "user not logged in"
        
//     })
// }
// auth_routes.put("/me", loginCheck,(req, res, next)=>{
// });
// auth_routes.get("/me", loginCheck,(req,res, next)=>{
//     //respose to client
//     // next does not use ==> this doesnot work!
// });

// auth_routes.route("/me")
//     .get(loginCheck, (req, res, next)=>{
//         //response to the client 
//         //next doesnot use 
//     })
// }