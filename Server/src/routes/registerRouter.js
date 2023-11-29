 const express = require('express') 
const registerRouter = express.Router()
const registerModel = require('../models/registerModel');
const workerModel = require('../models/workerModel');
const loginModel = require('../models/loginModel');
const packModel = require('../models/packModel')
const bcrypt=require('bcryptjs')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, '../Client/public/upload')
    },
    filename: function(req, file, cb){
        cb(null,req.body.name)
    }
})
const upload = multer({ storage: storage})

registerRouter.post('/upload-image', upload.single('file'),(req,res)=>{
    res.status(200).json({
        message:"image added"
    })
})
registerRouter.post('/userreg',async function (req,res){

    try{
        console.log("query===>",req.query);
        const oldUser  = await loginModel.findOne({username: req.body.username})
        console.log("hgfjkfdjsf============>",oldUser);
        if(oldUser){
            return res.status(400).json({
                success: false,
                error: true,
                message: "user already exist",

            })
        }
        const oldEmail  = await registerModel.findOne({email: req.body.username})
        if(oldEmail){
            return res.status(400).json({
                success: false,
                error: true,
                message: "email already exist",

            })
        }
        const hashed = await bcrypt.hash(req.body.password,12)
        const login={
            password:hashed,
            username:req.body.username,
            role: 1,
            status: 0
        }
        const login_data =await loginModel(login).save()
        const register ={
            login_id:login_data._id,
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact,
            adress: req.body.adress,
            username: req.body.username,
            password:req.body.password,
            confirm:req.body.confirm,



        }
        const datas = await registerModel(register).save()
        if (datas){
            return res.status(200).json({
                success: true,
                error: false,
                message: "registration completed",
                data:datas
            })
    
        }
            
        }catch{
            return res.status(400).json({
                success: false,
                error: true,
                message: "something went wrong",
            })

        }
})



registerRouter.get('/view-user',async function (req,res){

    try{
       
        const user  = await registerModel.find()
        if(user){
            return res.status(200).json({
                success: false,
                error: true,
                details: user,

            })
        }else{
            return res.status(400).json({
                success: false,
                error: true,
                message: "No data found",
            })
        }

            
        }catch{
            return res.status(400).json({
                success: false,
                error: true,
                message: "something went wrong",
            })

        }
})





registerRouter.post('/Regworker',async function (req,res){

    try{
        console.log("query===>",req.body);
        const oldUser  = await loginModel.findOne({username: req.body.username})
        console.log("hgfjkfdjsf============>",oldUser);
        if(oldUser){
            return res.status(400).json({
                success: false,
                error: true,
                message: "user already exist",

            })
        }
        const oldEmail  = await workerModel.findOne({email: req.body.email})
        if(oldEmail){
            return res.status(400).json({
                success: false,
                error: true,
                message: "email already exist",

            })
        }
        const hashed = await bcrypt.hash(req.body.password,12)
        const login={
            password:hashed,
            username:req.body.username,
            role:2,
            status: 0
        }
        const login_data =await loginModel(login).save()
        const register ={
            login_id:login_data._id,
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact,
            adress: req.body.adress,
            categorywork: req.body.categorywork,
            workerimage: req.body.workerimage,
            username: req.body.username,
            password:req.body.password,
            confirm:req.body.confirm,



        }
        const datas = await workerModel(register).save()
        if (datas){
            return res.status(200).json({
                success: true,
                error: false,
                message: "Worker registration completed",
                data:datas
            })
    
        }
            
        }catch{
            return res.status(400).json({
                success: false,
                error: true,
                message: "something went wrong",
            })

        }
})

registerRouter.get('/view-worker',async function (req,res){

    try{
       
        const worker  = await workerModel.find()
        if(worker){
            return res.status(200).json({
                success: false,
                error: true,
                details: worker,

            })
        }else{
            return res.status(400).json({
                success: false,
                error: true,
                message: "No data found",
            })
        }

            
        }catch{
            return res.status(400).json({
                success: false,
                error: true,
                message: "something went wrong",
            })

        }
})


registerRouter.post('/Regpacjmove',async function (req,res){

    try{
        console.log("query===>",req.body);
        const oldUser  = await loginModel.findOne({username: req.body.username})
        console.log("hgfjkfdjsf============>",oldUser);
        if(oldUser){
            return res.status(400).json({
                success: false,
                error: true,
                message: "user already exist",

            })
        }
        const oldEmail  = await packModel .findOne({email: req.body.email})
        if(oldEmail){
            return res.status(400).json({
                success: false,
                error: true,
                message: "email already exist",

            })
        }
        const hashed = await bcrypt.hash(req.body.password,12)
        const login={
            password:hashed,
            username:req.body.username,
            role:3,
            status: 0
        }
        const login_data =await loginModel(login).save()
        const register ={
            login_id:login_data._id,
            name: req.body.name,
            email: req.body.email,
            contact: req.body.contact,
            adress: req.body.adress,
            username: req.body.username,
            password:req.body.password,
            confirm:req.body.confirm,



        }
        const datas = await packModel(register).save()
        if (datas){
            return res.status(200).json({
                success: true,
                error: false,
                message: "pack&move registration completed",
                data:datas
            })
    
        }
            
        }catch{
            return res.status(400).json({
                success: false,
                error: true,
                message: "something went wrong",
            })

        }
})


registerRouter.get('/viewpack',async function (req,res){

    try{
       
        const pack  = await packModel.find()
        if(pack[0]!=undefined){
            return res.status(200).json({
                success: false,
                error: true,
                details: pack,

            })
        }else{
            return res.status(400).json({
                success: false,
                error: true,
                message: "No data found",
            })
        }

            
        }catch{
            return res.status(400).json({
                success: false,
                error: true,
                message: "something went wrong",
            })

        }
})



 
        









module.exports=registerRouter