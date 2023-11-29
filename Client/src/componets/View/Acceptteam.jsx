import React,{ useEffect, useState } from 'react'
import axios from 'axios'

export default function Acceptteam() {
    const [team, setTeam] = useState([])
    console.log(team);
    useEffect(() => {
       const packId=localStorage.getItem('loginId')
       console.log(packId);
      axios.get(`http://localhost:4000/team/view-accept-booking/${packId}`).then((response)=> {
           //console.log("response====>", response);
           setTeam(response.data.data)
      }).catch((err) => {
          console.log(err);
      })
  }, [])

  
  
  return (


    
    <>
    
       
    <div className="container-fluid py-5">
  <div className="container">
    <div className="row align-items-end mb-4">
      <div className="col-lg-6">
        <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">
           Accepted team
         </h6>
        <h1 className="section-title mb-3">
        Here you can see the Pack&move Team who have accepted your pack&move request
        </h1>
      </div>
      <div className="col-lg-6">
        <h4 className="font-weight-normal text-muted mb-3">
        Here you can see the pack&move team who have accepted your pack&move request
        Here you will find their communication details.then you can contact them.
        
        </h4>
      </div>
    </div>
    {team.map((data, key)=>(
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
            {data.name}
          </a>
          <span className="text-primary px-2">|</span>
          <a
            className="text-secondary text-uppercase font-weight-medium"
            href=""
          >
            
            {data._id}
          </a>
        </div>
        <h5 className="font-weight-medium mb-2">{data.email}</h5>
        <p className="mb-4">
        contact:{data.contact}
        </p>
       
      </div>
      
      
      
       
       
    </div>
     ))}
  </div>
</div>
    
    
    
    
     </>
  )
}
