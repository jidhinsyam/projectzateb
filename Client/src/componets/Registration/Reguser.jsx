
import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Reguser() {
  const navigate = useNavigate()
  const [input, setInput] = useState({
    contact:"",
    username:"",
    password:"",
    address:""
  })
  const[formErrors,setFormErrors] = useState({});
  const[isSubmit,setIsSubmit] = useState(false);

  const inputChange = (Event) => {
    const name = Event.target.name
    const value = Event.target.value
    setInput({ ...input, [name]: value })
  }


  const submit = (Event) => {
    Event.preventDefault()
    console.log(input);
  }
  const handleinputchange=(e)=>{
    const[name,value]=e.target
    setInput({...input,[name]:value})
    console.log(input);
  }
  const validate = (values)=>{
    var errors={};
    const Reguser = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneno = /^[6-9]\d{9}$/;
    if(!values.name){
      errors.username = "enter username"
    }
    if(!values.password){
      errors.password = "enter password"
    }
    if(!values.contact){
      errors.contact = "enter contact!";
    }else if(!
      phoneno.test(values.contact)){
        errors.contact = "enter valid contact number"
      }
      if(!values.address){
        errors.address = "enter address"
      }
      
return errors
  }
  const validation = (e)=>{
    e.preventDefault();
    setFormErrors(validate(input))
    setIsSubmit(true)
    if(Object.keys(formErrors).length===0&&isSubmit)
  {

  
   console.log(input);
    axios.post('http://localhost:4000/register/userreg',input).then((response)=>{
      console.log("res=======>",response.data);
      if(response.data.success===true){

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
        setTimeout(function(){
          navigate('/login')
      }, 5000);
        
      }  
    }).catch((err)=>{
      console.log(err);
    })
  }
}
  





  return (
    <>
    <ToastContainer/>
      <div className="container-fluid bg-primary py-5 mb-5">
        <div className="container py-5">
          <div className="row align-items-center py-4">
            <div className="col-md-6 text-center text-md-left">
              <h1 className="display-4 mb-4 mb-md-0 text-secondary text-uppercase">
                Registration
              </h1>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <div className="d-inline-flex align-items-center">
                <a className="btn btn-sm btn-outline-light" href="">
                  Home
                </a>
                <i className="fas fa-angle-double-right text-light mx-2" />
                <a className="btn btn-sm btn-outline-light disabled" href="">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-end mb-4">
            <div className="col-lg-6">
              <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">
                
              </h6>
              <h1 className="section-title mb-3"></h1>Register Here..
            </div>

          </div>
          <div className="row">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="contact-form">
                <div id="success" />
                <form name="sentMessage" id="contactForm" noValidate="novalidate">
                  <div className="form-row">
                    <div className="col-sm-6 control-group">
                    <span style={{color:'red'}}>{formErrors?.name}</span>
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
                    <span style={{color:'red'}}>{formErrors?.contact}</span>
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
                  <div className="control-group" >
                  <span style={{color:'red'}}>{formErrors?.contact}</span>
                    <input
                      type="text"
                      className="form-control p-4"
                      id="subject"
                      placeholder="Contact Number"
                      required="required"
                      data-validation-required-message="Please enter your  contact number"
                      name="contact"
                      onChange={inputChange}
                    />
                    <p className="help-block text-danger" />
                  </div>

                  <select name="state" onChange={inputChange} className="form-control p-4"
                    required="required">
                    <div className="name">Subject</div>
                    <option value="Computer Architecture" selected="">
                      Computer Architecture
                    </option>
                    <option value="Java">Java</option>
                    <option value="Discrete Mathematics">D</option>
                    name="D"
                    
                  </select><br />


                  <div className="control-group">
                  <span style={{color:'red'}}>{formErrors?.address}</span>
                    <textarea
                      className="form-control p-4"
                      rows={6}
                      id="message"
                      placeholder="Adress"
                      required="required"
                      data-validation-required-message="Please enter your address"
                      defaultValue={""}
                      name="adress"
                      onChange={inputChange}

                    />
                    <p className="help-block text-danger" />
                  </div>
                  <div className=" control-group">
                  <span style={{color:'red'}}>{formErrors?.username}</span>
                    <input
                      type="username"
                      className="form-control p-4"
                      id="username"
                      placeholder="username"
                      required="required"
                      data-validation-required-message="Username"
                      name="username"
                      onChange={inputChange}
                    />
                    <p className="help-block text-danger" />
                  </div>
                  <div className=" control-group">
                  <span style={{color:'red'}}>{formErrors?.password}</span>
                    <input
                      type="password"
                      className="form-control p-4"
                      id="password"
                      placeholder="create your password"
                      required="required"
                      data-validation-required-message="password"
                      name="password"
                      onChange={inputChange}
                    />
                    <p className="help-block text-danger" />
                  </div>
                  <div className=" control-group">
                  <span style={{color:'red'}}>{formErrors?.password}</span>
                    <input
                      type="password"
                      className="form-control p-4"
                      id="password"
                      placeholder="confirm your password"
                      required="required"
                      data-validation-required-message="Password"
                      name="confirm"
                      onChange={inputChange}
                    />
                    <p className="help-block text-danger" />
                  </div>

                  <div>
                    <button
                      className="btn btn-primary btn-block py-3 px-5"
                      onClick={validation}
                      type="submit"
                      id="sendMessageButton"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </ >
  )
}
