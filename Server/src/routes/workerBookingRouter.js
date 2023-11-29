const express = require('express')
const workerBookingRouter = express.Router()

const bookingModel=require('../models/bookingModel')
const workerModel = require('../models/workerModel')
const requestModel=require('../models/requestModel')

workerBookingRouter.post('/',async function(req,res){
   try{
       const book={
           workerId:req.body.workerId,
           userId:req.body.userId,
           jobdiscription:req.body.jobdiscription,
           place:req.body.place,
           date:req.body.date,
           status: 0
           
       }
const book_data = await bookingModel(book).save()
if(book){
   return res.status(200).json({
       success:true,
       error: false,
       message: "book request sended",
       data:book
   })
}
}
catch (error){

}
})

workerBookingRouter.get('/view-book/:workerId',async function (req,res){

    try{
        const workerId = req.params.workerId

        const book  = await bookingModel.find({workerId:workerId},{status:0})
           // {
             //  '$lookup': {
              //    'from': 'registration_tbs', 
               //   'localField': 'userId', 
               //   'foreignField': '_id', 
                //  'as': 'user'
              //  }
             // },{
                //  "$unwind":'$user'
            //  },
              
             // {
                 // "$group":{
                   //   '_id':'$_id',
                      
                   //  'name':{'$first':'$user.name'},
                    // 'email':{'$first':'$user.email'},
                    //  'contact':{'$first':'$user.contact'},
                   //  'adress':{'$first':'$user.adress'},
                   //  'status':{'$first':'$status'},
  
                //  }
           //   }    
     //   ])
        if(book[0]!=undefined){
            return res.status(200).json({
                success: false,
                error: true,
                data:book,
                details: book,

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



workerBookingRouter.get('/accept-wbooking/:de',async function (req,res){

    try{
        const id = req.params.de
        const book  = await bookingModel.updateOne({_id:id},{$set:{status:1}})
        if(book.modifiedCount==1){
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


workerBookingRouter.get('/reject-wbook/:de',async function (req,res){

    try{
       const id = req.params.de
       
        const book  = await bookingModel.deleteOne({_id:id},{$set:{status:1}})
        console.log(book);
        
            if(book.deletedCount==1){
            return res.status(200).json({
                success: true,
                error: false,
                message: 'rejected',

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

 

workerBookingRouter.get('/request/:bookId/:userId',async function (req,res){

    try{
        const data={ 
            userId:req.params. userId,
            bookId:req.params.bookId,
            status:0
        }
 
        const  book  = await requestModel(data).save()
        if(book){
            return res.status(200).json({
                success: true,
                error: false,
                message: "requested",

            })
        }else{
            return res.status(400).json({
                success: false,
                error: true,
                message: "Not requested",
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


module.exports=workerBookingRouter