import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Teamrep() {
  const [pack, setPack] = useState([])
    console.log(pack);
    useEffect(() => {
      const packId=localStorage.getItem('loginId')
      console.log(packId);
      axios.get(`http://localhost:4000/packbooking/view-pbook/${packId}`).then((response)=> {
           console.log("response====>", response);
          setPack(response.data.details)
      }).catch((err) => {
          console.log(err);
      })
  }, [])

  const accept = (id)=>{
    axios.get(`http://localhost:4000/packbooking/accept-booking/${id}`).then((response)=> {
           console.log("response====>", response);
        //   setPack(response.data.details)
      }).catch((err) => {
          console.log(err);
      })
  }
  const reject = (id)=>{
    axios.get(`http://localhost:4000/packbooking/reject-booking/${id}`).then((response)=> {
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
          Request
        </h6>
        <h1 className="section-title mb-3">
          Your work request are here..
        </h1>
      </div>
      <div className="col-lg-6">
        <h4 className="font-weight-normal text-muted mb-3">
          
        </h4>
      </div>
    </div>
    {pack.map((data, key)=>(
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
          Move from  {data.from}
            

          </a>
          <span className="text-primary px-2">   |  </span>
          <a
            className="text-secondary text-uppercase font-weight-medium"
            href=""
          >
             To {data.to}
          </a>
        </div>
        <h5 className="font-weight-medium mb-2">Day To Work {data.date}</h5>
        <p className="mb-4">
         Discription of household goods to be carried {data.discription}
        </p>
        <botton onClick={()=>{accept(data._id)}} className="btn btn-sm btn-primary py-2">
          Accept
        </botton>
        <botton  onClick={()=>{reject(data._id)}}  className="btn btn-sm btn-primary py-2">
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
