import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Userview() {
  const [worker, setWorker] = useState([])
    console.log(worker);
    useEffect(() => {
      const workerId=localStorage.getItem('loginId')
      console.log(workerId);
      axios.get(`http://localhost:4000/workerbooking/view-book/${workerId}`).then((response)=> {
           console.log("response====>", response);
          setWorker(response.data.details)
      }).catch((err) => {
          console.log(err);
      })
  }, [])
  const accept = (id)=>{
    axios.get(`http://localhost:4000/workerbooking/accept-wbooking/${id}`).then((response)=> {
           console.log("response====>", response);
        //   setPack(response.data.details)
      }).catch((err) => {
          console.log(err);
      })
  }
  const reject = (id)=>{
    axios.get(`http://localhost:4000/workerbooking/reject-wbook/${id}`).then((response)=> {
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
          Bookings
        </h6>
        <h1 className="section-title mb-3">
          Your bookings are here..
        </h1>
      </div>
      <div className="col-lg-6">
        <h4 className="font-weight-normal text-muted mb-3">
          
        </h4>
      </div>
    </div>
    {worker.map((data, key)=>(
    <div className="row">
      <div className="col-lg-4 col-md-6 mb-5">
        <div className="position-relative mb-4">
          <img
            className="img-fluid rounded w-100"
            src="asset/img/blog-1.jpg"
            alt=""
          />
          <div className="blog-date">
            <h4 className="font-weight-bold mb-n1"></h4>
            <small className="text-white text-uppercase">verified</small>
          </div>
        </div>
        <div className="d-flex mb-2">
          <a
            className="text-secondary text-uppercase font-weight-medium"
            href=""
          >
           Place: {data.place}
          </a>
          <span className="text-primary px-2">|</span>
          <a
            className="text-secondary text-uppercase font-weight-medium"
            href=""
          >
             Job Discription:{data.jobdiscription}
          </a>
        </div>
        <h5 className="font-weight-medium mb-2">Date:{data.date}</h5>
        <p className="mb-4">
        {data.time}
        </p>
        <botton onClick={()=>{accept(data._id)}} className="btn btn-sm btn-primary py-2">
          Accept
        </botton>
        <botton onClick={()=>{reject(data._id)}} className="btn btn-sm btn-primary py-2">
          Reject
        </botton>
      </div>
      
      
      
       
       
    </div>
    ))}
  </div>
</div>

    
     </ >
  )
}
