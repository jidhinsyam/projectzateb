const mongoose = require ('mongoose')

const schema = mongoose.Schema

const intrestSchema = new schema({
    workerId:{type:mongoose.Types.ObjectId,ref:"worker_registration_tb"},
    jobId:{type:mongoose.Types.ObjectId,ref:"job_tb"},
    status: {type:String}
     
    
})
const intrestModel = mongoose.model('Workerintrest_tb',intrestSchema)
module.exports =intrestModel