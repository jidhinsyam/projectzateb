import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const navigate = useNavigate()
  const [input, setInput] = useState({
    username: "",
    password: ""
  })

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);




  const inputChange = (Event) => {
    const name = Event.target.name
    const value = Event.target.value
    setInput({ ...input, [name]: value })
  }
  const validate = (values) => {
    var error = {}
    if (!values.name) {
      error.username = "enter your name"
    }
    if (!values.name) {
      error.password = "enter the password"
    }
    return error
  }
  const validation = (Event) => {
    Event.preventDefault()


    // const submit = (Event)=>{
    // Event.preventDefault()
    //  console.log(input);

    setFormErrors(validate(input))
    setIsSubmit(true)
    console.log('hai', input);
    axios.post('http://localhost:4000/login', input).then((response) => {
      console.log("res=======>", response.data);
      console.log(response.data.success);
      console.log(response.data);
      if (response.data.success == true) {
        if (response.data.role == 0) {
          navigate('/admin')
        }
        if (response.data.role == 1) {
          if (response.data.status == 0) {
            toast.error('waiting for admins approval', {
              position: "top-center",
              autoClose: 5000,
               hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          } else {
            console.log(response.data);
            localStorage.setItem('loginId',response.data.login_id)
            localStorage.setItem('userId',response.data.userId)
            localStorage.setItem('role',response.data.role)
            navigate('/User')
          }

        }
        if (response.data.role == 2) {
          if (response.data.status == 0) {
            toast.error('waiting for admins approval', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          } else { 
            localStorage.setItem('loginId',response.data.login_id)
            localStorage.setItem('workerId',response.data.userId)
            localStorage.setItem('role',response.data.role)
            navigate('/Worker')
          }
        }
        if (response.data.role == 3) {
          if (response.data.status == 0) {
            toast.error('waiting for admins approval', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          } else {
            localStorage.setItem('loginId',response.data.login_id)
            localStorage.setItem('packId',response.data.userId)
            localStorage.setItem('role',response.data.role)
            navigate('/pack')
          }
        }
      }
    }).catch((err) => {
      console.log(err);
      toast.error(err.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      
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
    <>
      <ToastContainer />
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-end mb-4">
            <div className="col-lg-6">
              <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">
                Login
              </h6>
              <h1 className="section-title mb-3">
                LOGIN HERE
              </h1>
            </div>
            <div className="col-lg-6">

            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="contact-form">
                <div id="success" />
                <form name="sentMessage" id="contactForm" noValidate="novalidate">

                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control p-4"
                      id="subject"
                      placeholder="User name"
                      required="required"
                      data-validation-required-message="Enter Username"
                      name="username"
                      onChange={inputChange}
                    />
                    <span className='span'>{formErrors?.name}</span>
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group">
                    <input
                      type="password"
                      className="form-control p-4"
                      id="password"
                      placeholder="password"
                      required="required"
                      data-validation-required-message="Please enter your password"
                      defaultValue={""}
                      name="password"
                      onChange={inputChange}
                    />
                    <span className='span'>{formErrors?.password}</span>
                    <p className="help-block text-danger" />
                  </div>
                  <div>
                    <button
                      className="btn btn-primary btn-block py-3 px-5"
                      onClick={validation}
                      type="submit"
                      id="loginbutton"
                    >
                      LOGIN
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5" style={{ minHeight: 400 }}>
              <div className="position-relative h-100 rounded overflow-hidden">


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
