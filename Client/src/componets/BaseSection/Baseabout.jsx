import React from 'react'

export default function Baseabout() {
  return (
    <> 
    <div className="container-fluid py-5 mb-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-5">
        <div className="d-flex flex-column align-items-center justify-content-center bg-about rounded h-100 py-5 px-3">
          <i className="fa fa-5x fa-award text-primary mb-4" />
          <h1 className="display-2 text-white mb-2" data-toggle="counter-up">
   ONE 
          </h1>
          <h2 className="text-white m-0">Of The Genuine Platform</h2>
        </div>
      </div>
      <div className="col-lg-7 pt-5 pb-lg-5">
        <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">
          Learn About Us
        </h6>
        <h1 className="mb-4 section-title">
          A Good Job Opportunity for Workers,As Well As A 
          place To Find Good Workers
        </h1>
        <h5 className="text-muted font-weight-normal mb-3">
        I introducing a platform were the worker and the person who need a worker are connected
        </h5>
        <p>
        A person can search for the worker from the categories of job that he is in needed, and can find suitable worker. The worker accept the request and get to the job
        .An admin will verify the workers profiles and ensure they are genuine
        </p>
        <div className="d-flex align-items-center pt-4">
          <a href="" className="btn btn-primary mr-5">
            Learn More
          </a>
          <button
            type="button"
            className="btn-play"
            data-toggle="modal"
            data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
            data-target="#videoModal"
          >
            <span />
          </button>
          <h5 className="font-weight-normal text-white m-0 ml-4 d-none d-sm-block">
            Play Video
          </h5>
        </div>
      </div>
    </div>
  </div>
</div>
<div
  className="modal fade"
  id="videoModal"
  tabIndex={-1}
  role="dialog"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-body">
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">×</span>
        </button>
        {/* 16:9 aspect ratio */}
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src=""
            id="video"
            allowscriptaccess="always"
            allow="autoplay"
          />
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}
