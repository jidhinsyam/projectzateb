const express = require('express')
const feedbackRouter = express.Router()

const feedbackModel=require('../models/FeedbackModel')

feedbackRouter.post('/',async function(req,res){
   try{
       const feedback={
        workerId:req.body.workerId,
           userId:req.body.userId,
           date:req.body.date,
           time:req.body.time,
           feedback:req.body.feedback
           
       }
const feedback_data = await feedbackModel(feedback).save()
if(feedback){
   return res.status(200).json({
       success: false,
       error: true,
       message: "sended",
       data:feedback
   })
}
}
catch (error){

}
})


feedbackRouter.get('/view-feed/:workerId',async function (req,res){

    try{
        const workerId = req.params.workerId
        const feedback  = await feedbackModel.find({workerId:workerId})
        if(feedback[0]!=undefined){
            return res.status(200).json({
                success: false,
                error: true,
                details: feedback,

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



module.exports=feedbackRouter