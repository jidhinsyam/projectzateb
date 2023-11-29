import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



export default function Basefeed() {
  const {id} = useParams()
  const WorkerId = localStorage.getItem('workerId')
   
  
    

  const [input, setInput] = useState({
    workerId:WorkerId,
    userId:id
  })
  const inputChange = (Event) => {
    const name = Event.target.name
    const value = Event.target.value
    setInput({ ...input, [name]: value })
  }
    const submit = (Event) => {
      Event.preventDefault()
      console.log(input);
      axios.post('http://localhost:4000/feedback',input).then((response)=>{
        console.log("res=======>",response.data);
        if(response.data.success===true){
         
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
          Contact Us
        </h6>
        <h1 className="section-title mb-3">Contact Us For Cleaning Services</h1>
      </div>
      <div className="col-lg-6">
        <h4 className="font-weight-normal text-muted mb-3">
          Eirmod kasd duo eos et magna, diam dolore stet sea clita sit ea erat
          lorem. Ipsum eos ipsum magna lorem stet
        </h4>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-7 mb-5 mb-lg-0">
        <div className="contact-form">
          <div id="success" />
          <form name="sentMessage" id="contactForm" noValidate="novalidate">
            <div className="form-row">
              <div className="col-sm-6 control-group">
                <input
                  type="Date"
                  className="form-control p-4"
                  id="name"
                  placeholder="Date"
                  required="required"
                  data-validation-required-message="Please enter Date"
                  name="date"
                  onChange={inputChange}
                />
                <p className="help-block text-danger" />
              </div>
              <div className="col-sm-6 control-group">
                <input
                  type="time"
                  className="form-control p-4"
                  id="time"
                  placeholder="Time"
                  required="required"
                  data-validation-required-message="Please fill"
                  name="time"
                  onChange={inputChange}
                />
                <p className="help-block text-danger" />
              </div>
            </div>
            
            <div className="control-group">
              <textarea
                className="form-control p-4"
                rows={6}
                id="feedback"
                placeholder="Feedback"
                required="required"
                data-validation-required-message="Please enter your feedback"
                defaultValue={""}
                name="feedback"
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
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-5" style={{ minHeight: 400 }}>
      <div img src="carousel-1.jpg" width={500} height={600}/>       
      </div>
      </div>
    </div>
  </div>     
     </ >
  )
}
