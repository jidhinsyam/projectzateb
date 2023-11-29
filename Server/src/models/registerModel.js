const mongoose = require ('mongoose')

const schema = mongoose.Schema

const registerSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"}, 
    name: {type:String},
    email: {type:String}, 
    contact: {type:String},
    adress: {type:String},
    username:{type:String},
    password:{type:String},
    confirmpassword:{type:String},
})
const registerModel = mongoose.model('registration_tb',registerSchema)
module.exports = registerModel