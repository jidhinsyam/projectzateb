const mongoose = require ('mongoose')

const schema = mongoose.Schema

const bookSchema = new schema({
    workerId:{type:mongoose.Types.ObjectId,ref:"worker_registration_tb"},
    userId:{type:mongoose.Types.ObjectId,ref:"registration_tb"},
    jobdiscription: {type:String}, 
    place: {type:String}, 
    date: {type:String},
    status: {type:String}
     
    
})
const bookingModel = mongoose.model('book_tb',bookSchema)
module.exports = bookingModel