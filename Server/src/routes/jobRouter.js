const express = require('express')
const jobRouter = express.Router()

const jobModel=require('../models/jobModel')
const intrestModel = require('../models/intrestModel')

jobRouter.post('/',async function(req,res){
   try{
       const job={
        
           jobcategory:req.body.jobcategory,
           place:req.body.place,
           jobWage:req.body.jobWage,
           date:req.body.date,
           time:req.body.time,
           status: 0
           
       }
const job_data = await jobModel(job).save()
if(job){
   return res.status(200).json({
       success: false,
       error: true,
       message: "job added",
       data:job
   })
}
}
catch (error){

}
})

jobRouter.get('/view-job',async function (req,res){

    try{
       
        const job  = await jobModel.find({status:0})
        if(job[0]!=undefined){
            return res.status(200).json({
                success: true,
                error: false,
                data:job,
                details: job,

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


jobRouter.get('/intrested/:jobId/:workerId',async function (req,res){

    try{
        const data={ 
            workerId:req.params.workerId,
            jobId:req.params.jobId,
            status:0
        }
 
        const  job  = await intrestModel(data).save()
        if(job){
            return res.status(200).json({
                success: true,
                error: false,
                message: "intrested",

            })
        }else{
            return res.status(400).json({
                success: false,
                error: true,
                message: "Not intrested",
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


module.exports=jobRouter