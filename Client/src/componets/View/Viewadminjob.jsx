import React,{ useEffect, useState } from 'react'
import axios from 'axios'
export default function Viewadminjob() {
  const [job, setJob] = useState([])
  console.log(job);
  useEffect(() => {
   
    
    axios.get('http://localhost:4000/job/view-job').then((response)=> {
         console.log("response====>", response.details);
        setJob(response.data.details)
    }).catch((err) => {
        console.log(err); 
    })
}, [])
const Intrested = (id)=>{
  const WorkerId=localStorage.getItem('workerId')
  axios.get(`http://localhost:4000/job/intrested/${id}/${WorkerId}`).then((response)=> {
         console.log("response====>", response);
      //   setPack(response.data.details)
    }).catch((err) => {
        console.log(err);
    })
}

  return (
    < >
    
    <div className="container-fluid py-5">
  <div className="container">
    <div className="row align-items-end mb-4">
      <div className="col-lg-6">
        <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">
          Admin added job
        </h6>
        <h1 className="section-title mb-3">
           Admin added Job
        </h1>
      </div>
      <div className="col-lg-6">
        <h4 className="font-weight-normal text-muted mb-3">
           
        </h4>
      </div>
    </div>
    {job.map((data, key)=>(
    <div className="row">
      <div className="col-lg-4 col-md-6 mb-5">
        <div className="position-relative mb-4">
          <img
            className="img-fluid rounded w-100"
            src="asset/img/blog-1.jpg"
            alt=""
          />
          <div className="blog-date">
            <h4 className="font-weight-bold mb-n1">01</h4>
            <small className="text-white text-uppercase">Jan</small>
          </div>
        </div>
        <div className="d-flex mb-2">
          <a
            className="text-secondary text-uppercase font-weight-medium"
            href=""
          >
             {data.place}
          </a>
          <span className="text-primary px-2">|</span>
          <a
            className="text-secondary text-uppercase font-weight-medium"
            href=""
          >
            {data.date}
          </a>
        </div>
        <h5 className="font-weight-medium mb-2"> </h5>
        <p className="mb-4">
        {data.time}
        {data.jobcategory}
        {data.jobWage}
        </p>
        <center/><h8>Click here for admin access</h8>
        <botton onClick={()=>{Intrested(data._id)}} className="btn btn-sm btn-primary py-2">
          INTRESTED
        </botton><center/>
      </div>
      
      
      
       
       
    </div>                     
    ))}
  </div>
</div>
    
    </ >
  )
}
