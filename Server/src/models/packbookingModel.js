const mongoose = require ('mongoose')

const schema = mongoose.Schema

const pbookSchema = new schema({
    packId:{type:mongoose.Types.ObjectId,ref:"pack_registration_tb"},
    userId:{type:mongoose.Types.ObjectId,ref:"registration_tb"},
    discription: {type:String}, 
    from: {type:String},
    to: {type:String}, 
    date: {type:String},
    status: {type:String}
     
    
})
const packbookingModel = mongoose.model('pbook_tb',pbookSchema)
module.exports = packbookingModel