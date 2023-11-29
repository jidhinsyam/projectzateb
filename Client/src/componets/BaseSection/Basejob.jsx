import React, { useState }  from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Basejob() {
  
  const [input, setInput] = useState({})
  const inputChange = (Event) => {
    const name = Event.target.name
    const value = Event.target.value
    setInput({ ...input, [name]: value })
  }
  const submit = (Event) => {
    Event.preventDefault()
    console.log(input);



    axios.post(`http://localhost:4000/job`,input).then((response)=>{
     
    console.log("res=======>",response.data);
    if(response.data.success===true){
     // navigate('/login')
    }
  }).catch((err)=>{
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
         
        </h6>
        <h1 className="section-title mb-3">Jobs</h1>
      </div>
      
    </div>
    <div className="row">
      <div className="col-lg-7 mb-5 mb-lg-0">
        <div className="contact-form">
          <div id="success" />
          <form name="sentMessage" id="contactForm" noValidate="novalidate">
            
              <div className=" control-group">
                <input
                  type="text"
                  className="form-control p-4"
                  id="name"
                  placeholder="Job Discription"
                  required="required"
                  data-validation-required-message="Please enter job category"
                  name="jobcategory"
                  onChange={inputChange}
                />
                <p className="help-block text-danger" />
              </div>
              
        
            <div className="control-group">
              <input
                type="text"
                className="form-control p-4"
                id="place"
                placeholder="place"
                required="required"
                data-validation-required-message="Please enter place"
                name="place"
                onChange={inputChange}
              />
              <p className="help-block text-danger" />
            </div>

            <div className=" control-group">
                <input
                  type="text"
                  className="form-control p-4"
                  id="name"
                  placeholder="Job Wage Details"
                  required="required"
                  data-validation-required-message="Please enter job Wage"
                  name="jobWage"
                  onChange={inputChange}
                />
                <p className="help-block text-danger" />
              </div>
            <div className="control-group">
              <input
                type="Date"
                className="form-control p-4"
                id="Date"
            
                required="required"
                data-validation-required-message="Please enter Date"
                name="date"
                onChange={inputChange}
              />
              <p className="help-block text-danger" />
            </div>
            <div className="control-group">
              <h8>Time To Start Work</h8>
              <input
                type="time"
                className="form-control p-4"
                id="time"
            
                required="required"
                data-validation-required-message="Time to start work"
                name="time"
                onChange={inputChange}
              />
              <p className="help-block text-danger" />
            </div>           
            <div>
              <button
                className="btn btn-primary btn-block py-3 px-5"
                onClick={submit}
                type="submit"
                id="sendMessageButton"
              >
                ADD
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  </div>
</div>
 
     </>
  )
}
