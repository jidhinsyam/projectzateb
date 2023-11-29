import React from 'react'

export default function Navbar() {
  return (
    <>
    <div className="container-fluid">
    <div className="row">
      <div className="col-lg-3 bg-secondary d-none d-lg-block">
        <a
          href=""
          className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
        >
          <h1 className="m-0 display-3 text-primary">Za Teb</h1>
        </a>
      </div>
      <div className="col-lg-9">
        <div className="row bg-dark d-none d-lg-flex">
          <div className="col-lg-7 text-left text-white">
            <div className="h-100 d-inline-flex align-items-center border-right border-primary py-2 px-3">
              <i className="fa fa-envelope text-primary mr-2" />
              <small> Zateb@gmail.com</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-2 px-2">
              <i className="fa fa-phone-alt text-primary mr-2" />
              <small>+012 345 6789</small>
            </div>
          </div>
          <div className="col-lg-5 text-right">
            <div className="d-inline-flex align-items-center pr-2">
              <a className="text-primary p-2" href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="text-primary p-2" href="">
                <i className="fab fa-twitter" />
              </a>
              <a className="text-primary p-2" href="">
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="text-primary p-2" href="">
                <i className="fab fa-instagram" />
              </a>
              <a className="text-primary p-2" href="">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg bg-white navbar-light p-0">
          <a href="" className="navbar-brand d-block d-lg-none">
            <h1 className="m-0 display-4 text-primary"> Za Teb</h1>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav mr-auto py-0">
              <a href="/home" className="nav-item nav-link active">
                Home
              </a>
              <a href="/Ab" className="nav-item nav-link">
                About
              </a>
              <a href="/contact" className="nav-item nav-link">
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
                Contact
              </a>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a
              href="./reg.html"
              className="btn btn-primary mr-3 d-noned-lg-block"
              data-toggle="dropdown"
            >
              Register
            </a>
            <div className="dropdown-menu rounded-0 m-0">
              <a href="/Regworker" className="dropdown-item">
                Worker
              </a>
              <a href="/Reguser" className="dropdown-item">
                User
              </a>
              <a href="/Regpack" className="dropdown-item">
                Pack And Move
              </a>
            </div>
          </div>
          <a href="/login" className="btn btn-primary mr-3 d-none d-lg-block">
            LOGIN HERE
          </a>
        </nav>
      </div>
    </div>
  </div>
  </>
  
  )
}
   