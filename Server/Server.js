const express = require('express')
const mongoose = require('mongoose')
const registerModel = require('./src/models/registerModel');
const loginModel = require('./src/models/loginModel');
const registerRouter = require('./src/routes/registerRouter');
const bodyparser = require('body-parser')
const contactModel = require('./src/models/contactModel');
const contactRouter = require('./src/routes/contactRouter');
const feedbackRouter = require('./src/routes/feedbackRouter');
const feedbackModel = require('./src/models/FeedbackModel');
const jobRouter = require('./src/routes/jobRouter');
const jobModel = require('./src/models/jobModel');
const loginRouter = require('./src/routes/loginRouter');
const workerModel = require('./src/models/workerModel');
const packModel = require('./src/models/packModel');
const adminRouter = require('./src/routes/adminRouter');
const workerBookingRouter = require('./src/routes/workerBookingRouter');
const bookModel = require('./src/models/bookingModel');
const packBookingRouter = require('./src/routes/packBookingRouter');
const intrestWorkerRouter = require('./src/routes/intrestWorkerRouter');
const teamacceptRouter = require('./src/routes/teamacceptRouter');
const acceptworkerRouter = require('./src/routes/acceptworkerRouter');







const app=express()


app.use(express.urlencoded({extended:true}))
app.use(bodyparser())
app.use((req, res, next) => {
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader(
     "Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
   );
   res.setHeader( 
     "Access-Control-Allow-Methods",
     "GET, POST, PATCH, PUT, DELETE, OPTIONS"
   );
   next();
 });


//app.post('/',function(req,res){
 //   console.log(req);
 //   res.send("invild")
//})

//app.use('/register',async function(req,res){
   // try {
      //  const data ={
        //    name : req.query.name,
        //    age : req.query.age,
        //    address : req.query.address,
       //     number : req.query.number,
     //   }
     //   console.log("data========>",data);
    //    res.status(200).json({ data })
   // } catch (error) {
        
   // }
   
//})

app.use('/register',registerRouter)
app.use('/contact',contactRouter)
app.use('/feedback',feedbackRouter)
app.use('/job',jobRouter)
app.use('/login',loginRouter)
app.use('/Worker',registerRouter)
app.use('/Pack',registerRouter)
app.use('/admin',adminRouter)
app.use('/workerbooking',workerBookingRouter)
app.use('/packbooking',packBookingRouter)
app.use('/intrest',intrestWorkerRouter)
app.use('/team',teamacceptRouter)
app.use('/workeraccept',acceptworkerRouter)



 
   const mongoDBurl = "mongodb+srv://jidhinsyam:jidhinsyam@cluster0.w9mk4ft.mongodb.net/"
    mongoose.connect(mongoDBurl).then(()=> {
       app.listen(4000,()=>{ console.log("server started at http://localhost:4000");})
        

    }).catch((error)=>{
        console.log(error);

    })
    
