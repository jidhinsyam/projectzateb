import React,{useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function BaseWorkerbooking() {
  const {id} = useParams()
  const userId = localStorage.getItem('userId')
   const [input, setInput] = useState({
    userId:userId,
    workerId:id
   })
   const inputChange = (Event) => {
    const name = Event.target.name
    const value = Event.target.value
    setInput({ ...input, [name]: value })
  } 
  const submit = (Event) => {
    Event.preventDefault()
    console.log(input);

   
    axios.post(`http://localhost:4000/workerbooking`,input).then((response)=>{
     
      console.log("res=======>",response.data);
      if(response.data.success===true){
       // navigate('/login')
      }
    }).catch((err)=>{
      console.log(err);
    })
   
    

  }
 // const request = (id)=>{
   // const userId=localStorage.getItem('userId')
 //  axios.get(`http://localhost:4000/workerbooking/request/${id}/${userId}`).then((response)=> {
         //  console.log("response====>", response);
       //  // setPack(response.data.details)
     // }).catch((err) => {
         // console.log(err);
    //  })
 //}
  return (
    <>
    <div className="container-fluid py-5">
  <div className="container">
    <div className="row align-items-end mb-4">
      <div className="col-lg-6">
        <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">
         
        </h6>
        <h1 className="section-title mb-3">Booking</h1>
      </div>
      
    </div>
    <div className="row">
      <div className="col-lg-7 mb-5 mb-lg-0">
        <div className="contact-form">
          <div id="success" />
          <form name="sentMessage" id="contactForm" noValidate="novalidate">
            <h6>Booking Date</h6>
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
              <input
                type="  text"
                className="form-control p-4"
                id="text"
                placeholder="Job discription"
                required="required"
                data-validation-required-message="Please enter job discription"
                name="jobdiscription"
                  onChange={inputChange}
              />
              <p className="help-block text-danger" />
            </div>
             
        
            <div className="control-group">
              <input
                type="  text"
                className="form-control p-4"
                id="text"
                placeholder="place"
                required="required"
                data-validation-required-message="Please enter working site"
                name="place"
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
                 Submit
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
