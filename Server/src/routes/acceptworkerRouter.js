const express = require('express')
const acceptworkerRouter = express.Router()
const bookingModel=require('../models/bookingModel')

acceptworkerRouter.get('/view-workeraccept-booking/:d',async function (req,res){

    try{
        const id = req.params.d 
        const book  = await bookingModel.aggregate([
            
                 {
                  '$lookup': {
                    'from': 'worker_registration_tbs', 
                    'localField': 'workerId', 
                    'foreignField': 'login_id', 
                    'as': 'worker'
                  }
        
                },
                {
                    "$unwind":'$worker'
                },
                {
                    '$match':{
                        "status":'1'
                }
                },
                {
                    "$group":{
                        '_id':"$_id",
                        'name':{'$first':'$worker.name'},
                        'email':{'$first':'$worker.email'},
                        'contact':{'$first':'$worker.contact'},
                        'workerimage':{'$first':'$worker.workerimage'}
                    }
                }
              
        ])
        if(book){
            return res.status(200).json({
                success: true,
                error: false,
                data:book,
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


acceptworkerRouter.get('/workeraccept-booking/:devs',async function (req,res){

    try{
        const id = req.params.devs 
        const book  = await bookingModel.aggregate([
            
                 {
                  '$lookup': {
                    'from': 'worker_registration_tbs', 
                    'localField': 'WorkerId', 
                    'foreignField': 'login_id', 
                    'as': 'worker'
                  }
        
                }
              
        ])
        if(book){
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




module.exports=acceptworkerRouter