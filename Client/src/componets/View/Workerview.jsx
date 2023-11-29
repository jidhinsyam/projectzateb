 import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
export default function Workerview() {
    const [worker, setWorker] = useState([])
    console.log(worker);
    useEffect(() => {
      const workerId=localStorage.getItem('login_id')
      
      axios.get('http://localhost:4000/register/view-worker').then((response) => {
          // console.log("response====>", response.data.details);
          setWorker(response.data.details)
      }).catch((err) => {
          console.log(err);
      })
  }, [])
  return (
    < > 
    
    <div className="container-fluid py-5">
  <div className="container">
    <div className="row align-items-end mb-4">
      <div className="col-lg-6">
        <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">
          Book
         </h6>
        <h1 className="section-title mb-3">
          Find the right worker for your job from them
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
            src={`/upload/${data.workerimage}`}
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
            {data.name}
          </a>
          <span className="text-primary px-2">|</span>
          <a
            className="text-secondary text-uppercase font-weight-medium"
            href=""
          >
           email: {data.email},
           Work category: {data.categorywork}
          
          </a>
        </div>
        <h5 className="font-weight-medium mb-2">Adress: {data.adress} </h5>
        <p className="mb-4">
      
       costomers feedback: {data.feedback},
          feedback uploaded date:{data.date}
          
        </p>
        <Link className="btn btn-sm btn-primary py-2" to={`/bookworker/${data._id}`}>Book</Link>
        <Link className="btn btn-sm btn-primary py-2" to={`/viewfeedback/${data.workerId}`} >view Feedback</Link>
       
      </div>
      
      
      
       
       
    </div>
     ))}
  </div>
</div>

    
    
    </ >
  )
}
