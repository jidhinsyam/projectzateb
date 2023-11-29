const mongoose = require ('mongoose')

const schema = mongoose.Schema

const jobSchema = new schema({
    jobcategory: {type:String},
    place: {type:String},
    jobWage: {type:String}, 
    date: {type:String},
    time: {type:String},
    status:{type:String}
     
    
})
const jobModel = mongoose.model('job_tb',jobSchema)
module.exports = jobModel