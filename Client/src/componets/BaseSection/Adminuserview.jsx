import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Adminuserview() {
  const navigate = useNavigate()
  const [user, setUser] = useState([])
  console.log(user);
  useEffect(() => {

    axios.get('http://localhost:4000/admin/view-user').then((response) => {
      setUser(response.data.details)
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  const approve = (id) => {
    console.log("id===>", id);

    axios.get(`http://localhost:4000/admin/approve-user/${id}`).then((response) => {
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

  const reject = (id) => {
    console.log("id===>", id);

    axios.get(`http://localhost:4000/admin/reject-user/${id}`).then((response) => {
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
    < >

      <ToastContainer />
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-end mb-4">
            <div className="col-lg-6">
              <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">
                Users
              </h6>
              <h1 className="section-title mb-3">
                Users waiting for approval
              </h1>
            </div>
            <div className="col-lg-6">
              <h4 className="font-weight-normal text-muted mb-3">
               
              </h4>
            </div>
          </div>
          <div className="row">
            {user.map((data, key) => (

              <div className="col-lg-4 col-md-6 mb-5">
                <div className="position-relative mb-4">
                  <img
                    className="img-fluid rounded w-100"
                    src="asset/img/blog-1.jpg"
                    alt=""
                  />
                  <div className="blog-date">
                    <h4 className="font-weight-bold mb-n1">  </h4>
                    <small className="text-white text-uppercase"></small>
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
                  </a>
                </div>
                <h5 className="font-weight-medium mb-2">Name:{data.name}</h5>
                <p className="mb-4">
                
                 Email: {data.email},
                 Contact: {data.contact},
                 Adress: {data.adress}
                </p>

                {data.status == 0 ?
                  <>
                    <a className="btn btn-sm btn-primary py-2" onClick={() => { approve(data.login_id) }}>
                      Approve
                    </a>
                    <a className="btn btn-sm btn-primary py-2" onClick={() => { reject(data.login_id) }}>
                      Reject
                    </a>
                  </>
                  :
                  <a className="btn btn-sm btn-primary py-2" onClick={() => { reject(data.login_id) }}>
                    Reject
                  </a>
                }




              </div>


            ))}
          </div>
        </div>
      </div>









    </ >
  )
}
