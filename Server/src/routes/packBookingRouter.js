const express = require('express')
const packBookingRouter = express.Router()

const packbookingModel=require('../models/packbookingModel')

packBookingRouter.post('/',async function(req,res){
   try{
       const pbook={
           packId:req.body.packId,
           userId:req.body.userId,
           discription:req.body.discription,
           from:req.body.from,
           to:req.body.to,
           date:req.body.date,
           status: 0
           
       }
const pbook_data = await packbookingModel(pbook).save()
if(pbook){
   return res.status(200).json({
       success:true,
       error: false,
       message: "book request sended",
       data:pbook
   })
}
}
catch (error){

}
})



packBookingRouter.get('/view-pbook/:packId',async function (req,res){

    try{
           const packId = req.params.packId
        const pbook  = await packbookingModel.find({packId:packId},{status:0})
           //  {
              //    '$lookup': {
               //     'from': 'registration_tbs', 
                //    'localField': 'userId', 
                   // 'foreignField': '_id', 
                 ///   'as': 'user'
                  //}
                //
              
          //  },
           // {
            //  '$unwind':'$user'  
           // },
           // {
               // "$group":{
                    // '_id':'$_id',
                    
                  //  'name':{'$first':'$user.name'},
                   // 'email':{'$first':'$user.email'},
                   //  'contact':{'$first':'$user.contact'},
                    //'adress':{'$first':'$user.adress'},
                    //'discription':{'$first':'$discription'},
                    //'from':{'$first':'$from'},
                   // 'to':{'$first':'$to'},
                   // 'date':{'$first':'$date'},
                   // 'time':{'$first':'$time'},
                   // 'status':{'$first':'$status'},
          //   }
        // }
       // ])
        if(pbook[0]!=undefined){
            return res.status(200).json({
                success: false,
                error: true,
                details: pbook,

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




 


 
    
      
 
packBookingRouter.get('/accept-booking/:devs',async function (req,res){

    try{
        const id = req.params.devs
        const pbook  = await packbookingModel.updateOne({_id:id},{$set:{status:1}})
        if(pbook.modifiedCount==1){
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






packBookingRouter.get('/reject-booking/:devs',async function (req,res){

    try{
        const id = req.params.devs
        const pbook  = await packbookingModel.deleteOne({_id:id},{$set:{status:1}})
        if(pbook.deletedCount==1){
            return res.status(200).json({
                success: false,
                error: true,
                message: "Rejected",

            })
        }else{
            return res.status(400).json({
                success: false,
                error: true,
                message: "No Data Found",
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







 

module.exports=packBookingRouter