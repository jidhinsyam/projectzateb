const mongoose = require ('mongoose')

const schema = mongoose.Schema

const feedbackSchema = new schema({
    workerId:{type:mongoose.Types.ObjectId,ref:"worker_registration_tb"},
    userId:{type:mongoose.Types.ObjectId,ref:"registration_tb"},
    date: {type:String},
    time: {type:String}, 
    feedback: {type:String},
    status:  {type:String}
    
     
    
})
const feedbackModel = mongoose.model('feedback_tb',feedbackSchema)
module.exports = feedbackModel