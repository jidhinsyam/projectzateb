const mongoose = require ('mongoose')

const schema = mongoose.Schema

const packSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"}, 
    name: {type:String},
    email: {type:String}, 
    contact: {type:String},
    adress: {type:String},
    username:{type:String},
    password:{type:String},
    confirmpassword:{type:String},
})
const packModel = mongoose.model('pack_registration_tb',packSchema)
module.exports = packModel