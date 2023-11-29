const mongoose = require ('mongoose')

const schema = mongoose.Schema

const requestSchema = new schema({
    userId:{type:mongoose.Types.ObjectId,ref:"registration_tb"},
    bookId:{type:mongoose.Types.ObjectId,ref:"book_tb"},
    status: {type:String}
     
    
})
const requestModel = mongoose.model('userreuest_tb',requestSchema)
module.exports =requestModel