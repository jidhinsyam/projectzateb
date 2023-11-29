const express = require('express')
const teamacceptRouter = express.Router()
const packbookingModel=require('../models/packbookingModel')

teamacceptRouter.get('/view-accept-booking/:devs',async function (req,res){

    try{
        const id = req.params.devs 
        const pbook  = await packbookingModel.aggregate([
            
                 {
                  '$lookup': {
                    'from': 'pack_registration_tbs', 
                    'localField': 'packId', 
                    'foreignField': 'login_id', 
                    'as': 'pack'
                  }
        
                },
                {
                    "$unwind":'$pack'

                },
                {
                    '$match':{"status":'1'
                }
                },
                 {
                     "$group":{
                         '_id':"$_id",
                         'name':{'$first':'$pack.name'},
                         'email':{'$first':'$pack.email'},
                         'contact':{'$first':'$pack.contact'},
                     }
                 }
              
        ])
        if(pbook){
            return res.status(200).json({
                success: true,
                error: false,
                data:pbook,
                message: "Accepted",

            })
        }else{
            return res.status(400).json({
                success: false,
                error: true,
                message: "no data found",
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


teamacceptRouter.get('/accept-booking/:devs',async function (req,res){

    try{
        const id = req.params.devs 
        const pbook  = await packbookingModel.aggregate([
            
                 {
                  '$lookup': {
                    'from': 'pack_registration_tbs', 
                    'localField': 'packId', 
                    'foreignField': '_id', 
                    'as': 'pack'
                  }
        
                }
              
        ])
        if(pbook){
            return res.status(200).json({
                success: true,
                error: false,
                message: "Accepted",

            })
        }else{
            return res.status(400).json({
                success: false,
                error: true,
                message: "no data found",
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



















module.exports=teamacceptRouter