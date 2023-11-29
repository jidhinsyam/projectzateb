
const express = require('express')
const loginModel=require('../models/loginModel')
const registerModel=require('../models/registerModel')
const bcrypt =require('bcryptjs');
const workerModel = require('../models/workerModel');
const loginRouter=express.Router()
const packModel= require('../models/packModel');







loginRouter.post('/',async function (req,res){

    try{
        console.log(req.body);
        const userlog  = await loginModel.findOne({username: req.body.username})
    
        if(!userlog){
            return res.status(400).json({
                success: false,
                error: true,
                message: "username not exist",

            })
        }
        const passwordcheck = await  bcrypt.compare( req.body.password,userlog.password)
        console.log(passwordcheck);
        if(passwordcheck){
            console.log('role',userlog.role);
            if(userlog.role==0){
            return res.status(200).json({
                success: true,
                error: false,
                login_id:userlog._id,
                role:userlog.role,
                message: " login successfully",

            })
        }
        if(userlog.role==1){
            const userdata  = await registerModel.findOne({login_id:userlog._id})
            return res.status(200).json({
                success: true,
                error: false,
                login_id:userlog._id,
                userId:userdata._id,
                role:userlog.role,
                status:userlog.status,
                message: " login successfully"
            })
        }
        if(userlog.role==2){
            const userdata  = await workerModel.findOne({login_id:userlog._id})
            return res.status(200).json({
                success: true,
                error: false,
                login_id:userlog._id,
                userId:userdata._id,
                role:userlog.role,
                status:userlog.status,
                message: " login successfully"
            })
        }
        if(userlog.role==3){
            const userdata  = await packModel.findOne({login_id:userlog._id})
            return res.status(200).json({
                success: true,
                error: false,
                login_id:userlog._id,
                userId:userdata._id,
                role:userlog.role,
                status:userlog.status,
                message: " login successfully"
            })
        }
    



    }
        
        
        
        
        
        
        else{
            return res.status(400).json({
                success: true,
                error: false,
                message: "password not match",
   
            })
        }
    }catch{

    }
})
module.exports = loginRouter