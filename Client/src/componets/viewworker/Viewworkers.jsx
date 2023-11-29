
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export default function Viewworkers() {

  const navigate = useNavigate()
    const [worker, setWorker] = useState([])
    console.log(worker);
    useEffect(() => {
      axios.get('http://localhost:4000/register/view-worker').then((response) => {
          // console.log("response====>", response.data.details);
          setWorker(response.data.details)
      }).catch((err) => {
          console.log(err);
      })
  }, [])
  const approve = (id) => {
    console.log("id===>", id);

    axios.get(`http://localhost:4000/admin/approve-worker/${id}`).then((response) => {
     console.log(response);
     toast.success('', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    }).catch((err) => {
      console.log(err);
    })
  }
  const reject = (id) => {
    console.log("id===>", id);

    axios.get(`http://localhost:4000/admin/reject-worker/${id}`).then((response) => {
     console.log(response);
     toast.success(response.data.message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    }).catch((err) => {
      console.log(err);
    })
  }










  return (
    < >
   <ToastContainer/>

    <div className="container-fluid py-5">
  <div className="container">
    <div className="row align-items-end mb-4">
      <div className="col-lg-6">
        <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">
        workers  Approval
        </h6>
        <h1 className="section-title mb-3">
          Workers waiting for approval
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
            <small className="text-white text-uppercase"></small>
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
             {data.email}
          </a>
        </div>
        <h5 className="font-weight-medium mb-2"></h5>
        <p className="mb-4">
                 NAME: {data.name},
                EMAIL: {data.email},
               CONTACT NUMBER: {data.contact},
                 ADRESS: {data.adress},
                 CATEGORY OF WORK: {data.categorywork},
        </p>
        {data.status == 0 ?
        <>
        <a className="btn btn-sm btn-primary py-2" onClick={()=>{approve(data.login_id)}}>
          Approve
        </a>
        <a className="btn btn-sm btn-primary py-2" onClick={()=>{reject(data.login_id)}}>
          Reject
        </a>
        </>
        :
        <a className="btn btn-sm btn-primary py-2" onClick={()=>{reject(data.login_id)}}>
          Reject
        </a>
}
      </div>
     
    </div>
    ))}
  </div>
</div>

    
    
     </>
  )
}
