import React,{ useEffect, useState } from 'react'
import axios from 'axios'

export default function Intersworker() {
    const [intrest, setIntrest] = useState([])
    console.log(intrest);
    useEffect(() => {
       
      axios.get('http://localhost:4000/intrest/view-intrested').then((response)=> {
           //console.log("response====>", response);
           setIntrest(response.data.details)
      }).catch((err) => {
          console.log(err);
      })
  }, [])

  const accept = (id)=>{
    axios.get(`http://localhost:4000/intrest/accept-intrest/${id}`).then((response)=> {
           console.log("response====>", response);
        //   setPack(response.data.details)
      }).catch((err) => {
          console.log(err);
      })
  }
  return (
    <>
    
       
    <div className="container-fluid py-5">
  <div className="container">
    <div className="row align-items-end mb-4">
      <div className="col-lg-6">
        <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">
          Latest Blog
         </h6>
        <h1 className="section-title mb-3">
          Latest Articles From Our Blog Post
        </h1>
      </div>
      <div className="col-lg-6">
        <h4 className="font-weight-normal text-muted mb-3">
          Eirmod kasd duo eos et magna, diam dolore stet sea clita sit ea erat
          lorem. Ipsum eos ipsum magna lorem stet
        </h4>
      </div>
    </div>
    {intrest.map((data, key)=>(
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
            <small className="text-white text-uppercase">verified</small>
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
            {data._id}
          </a>
        </div>
        <h5 className="font-weight-medium mb-2">Rebum lorem eos ipsum diam</h5>
        <p className="mb-4">
          Dolor justo sea kasd lorem clita justo no diam amet. Kasd magna dolor
          amet
        </p>
        <botton onClick={()=>{accept(data._id)}} className="btn btn-sm btn-primary py-2">
          Accept
        </botton>
       
      </div>
      
      
      
       
       
    </div>
     ))}
  </div>
</div>
    
    
    
    
     </>
  )
}
