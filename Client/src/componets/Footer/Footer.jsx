import React from 'react'

export default function Footer() {
  return (
    <>
    
    <>
  <div className="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
    <div className="row pt-5">
      <div className="col-lg-3 col-md-6 mb-5">
        <a href="index.html" className="navbar-brand">
          <h1 className="m-0 mt-n3 display-4 text-primary">Za Teb</h1>
        </a>
        <p>
        A Good Job Opportunity for Workers,As Well As A 
          place To Find Good Workers
        </p>
        <h5 className="font-weight-semi-bold text-white mb-2">
          
        </h5>
        <p className="mb-1"> </p>
        <p className="mb-0"> </p>
      </div>
      <div className="col-lg-3 col-md-6 mb-5">
        <h4 className="font-weight-semi-bold text-primary mb-4">
          Get In Touch
        </h4>
        <p>
          <i className="fa fa-map-marker-alt text-primary mr-2" />
           kerala
        </p>
        <p>
          <i className="fa fa-phone-alt text-primary mr-2" />
          +012 345 67890
        </p>
        <p>
          <i className="fa fa-envelope text-primary mr-2" />
          Zateb@gmail.com
        </p>
        <div className="d-flex justify-content-start mt-4">
          <a className="btn btn-light btn-social mr-2" href="#">
            <i className="fab fa-twitter" />
          </a>
          <a className="btn btn-light btn-social mr-2" href="#">
            <i className="fab fa-facebook-f" />
          </a>
          <a className="btn btn-light btn-social mr-2" href="#">
            <i className="fab fa-linkedin-in" />
          </a>
          <a className="btn btn-light btn-social" href="#">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-5">
        <h4 className="font-weight-semi-bold text-primary mb-4">Quick Links</h4>
        <div className="d-flex flex-column justify-content-start">
          <a className="text-white mb-2" href="/">
            <i className="fa fa-angle-right mr-2" />
            Home
          </a>
          <a className="text-white mb-2" href="/ab">
            <i className="fa fa-angle-right mr-2" />
            About Us
          </a>
           
          
          <a className="text-white" href="/contact">
            <i className="fa fa-angle-right mr-2" />
            Contact Us
          </a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-5">
        <h4 className="font-weight-semi-bold text-primary mb-4">Newsletter</h4>
        <p>
        Customers can easily find a verified worker needed for their job, 
        and can request for a date and the worker accept the request 
        </p>
        <div className="w-100">
          <div className="input-group">
            <input
              type="text"
              className="form-control border-0"
              style={{ padding: 25 }}
              placeholder="Your Email"
            />
            <div className="input-group-append">
              <button className="btn btn-primary px-4">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5"
    style={{ borderColor: "#3E3E4E !important" }}
  >
    
  </div>
</>

    
    
    </>
  )
}
