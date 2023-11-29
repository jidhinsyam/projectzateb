
const express = require('express')
const intrestWorkerRouter = express.Router()

const intrestModel=require('../models/intrestModel')





intrestWorkerRouter.post('/',async function(req,res){
    try{
        const intrest={
            jobId:req.body.packId,
            workerId:req.body.userId,
            status: 0
            
        }
 const intrest_data = await  intrestModel(intrest).save()
 if(intrest){
    return res.status(200).json({
        success:true,
        error: false,
        message: "intrested",
        data:intrest
    })
 }
 }
 catch (error){
 
 }
 })




 intrestWorkerRouter.get('/view-intrested',async function (req,res){

    try{
       
        const intrest  = await intrestModel.aggregate([
            {
              '$lookup': {
                'from': 'worker_registration_tbs', 
                'localField': 'workerId', 
                'foreignField': '_id', 
                'as': 'worker'
              }
            }, {
              '$lookup': {
                'from': 'job_tbs', 
                'localField': 'jobId', 
                'foreignField': '_id', 
                'as': 'job'
              }
            },{
                "$unwind":'$worker'
            },
            {
                "$unwind":'$job'
            },
            {
                "$group":{
                    '_id':'$_id',
                    
                   'name':{'$first':'$worker.name'},
                   'email':{'$first':'$worker.email'},
                    'contact':{'$first':'$worker.contact'},
                   'adress':{'$first':'$worker.adress'},
                   'workcategory':{'$first':'$worker.workcategory'},
                   'jobcategory':{'$first':'$job.jobcategory'},
                   'place':{'$first':'$job.place'},
                   'time':{'$first':'$job.time'},
                   'status':{'$first':'$status'},

                }
            }  
          ])
        if(intrest[0]!=undefined){
            return res.status(200).json({
                success: true,
                error: false,
                data:intrest,
                details: intrest,

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


 intrestWorkerRouter.get('/accept-intrest/:jd',async function (req,res){

    try{
        const id = req.params.jd
        const intrest  = await intrestModel.updateOne({_id:id},{$set:{status:1}})
        if(intrest.modifiedCount==1){
            return res.status(200).json({
                success: true,
                error: false,
                message: "Accepted",

            })
        }else{
            return res.status(400).json({
                success: false,
                error: true,
                message: "Not accepted",
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





module.exports=intrestWorkerRouter