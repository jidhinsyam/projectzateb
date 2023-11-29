const mongoose = require ('mongoose')

const schema = mongoose.Schema

const workerregisterSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"}, 
    name: {type:String},
    email: {type:String}, 
    contact: {type:String},
    adress: {type:String},
    categorywork:{type:String},
    workerimage: {type:String},
    username:{type:String},
    password:{type:String},
    confirmpassword:{type:String},
})
const workerModel = mongoose.model('worker_registration_tb',workerregisterSchema)
module.exports = workerModel