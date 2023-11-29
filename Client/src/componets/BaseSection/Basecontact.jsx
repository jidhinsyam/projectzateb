import React, { useState } from 'react'
import axios from 'axios'
//import { useNavigate } from 'react-router-dom'


export default function Basecontact() {

  //const navigate = useNavigate()
  const [input, setInput] = useState({})
  const inputChange = (Event) => {
    const name = Event.target.name
    const value = Event.target.value
    setInput({ ...input, [name]: value })
  }

  const submit = (Event) => {
    Event.preventDefault()
    console.log(input);
    axios.post('http://localhost:4000/contact',input).then((response)=>{
      console.log("res=======>",response.data);
      if(response.data.success===true){
       // navigate('/')
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
        <h1 className="section-title mb-3">Please Feel Free To Let Me Know Your Requirements</h1>
      </div>
      <div className="col-lg-6">
        <h4 className="font-weight-normal text-muted mb-3">
            
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
                  type="text"
                  className="form-control p-4"
                  id="name"
                  placeholder="Your Name"
                  required="required"
                  data-validation-required-message="Please enter your name"
                  name="name"
                  onChange={inputChange}
                      
                />
                <p className="help-block text-danger" />
              </div>
              <div className="col-sm-6 control-group">
                <input
                  type="email"
                  className="form-control p-4"
                  id="email"
                  placeholder="Your Email"
                  required="required"
                  data-validation-required-message="Please enter your email"
                  name="email"
                  onChange={inputChange}
                      

                />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="control-group">
              <input
                type="text"
                className="form-control p-4"
                id="subject"
                placeholder="Subject"
                required="required"
                data-validation-required-message="Please enter a subject"
                name="subject"
                onChange={inputChange}
                    
              />
              <p className="help-block text-danger" />
            </div>
            <div className="control-group">
              <textarea
                className="form-control p-4"
                rows={6}
                id="message"
                placeholder="Message"
                required="required"
                data-validation-required-message="Please enter your message"
                defaultValue={""}
                name="message"
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
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-5" style={{ minHeight: 400 }}>
        <div className="position-relative h-100 rounded overflow-hidden">
          <iframe
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
            frameBorder={0}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
      </div>
    </div>
  </div>
</div>
 
    </ >
  )
}
