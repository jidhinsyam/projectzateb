import React from 'react'

export default function  () {
  return (
    < >
    <div className="container-fluid p-0">
  <div
    id="header-carousel"
    className="carousel slide carousel-fade"
    data-ride="carousel"
  >
    <ol className="carousel-indicators">
      <li data-target="#header-carousel" data-slide-to={0} className="active" />
      <li data-target="#header-carousel" data-slide-to={1} />
      <li data-target="#header-carousel" data-slide-to={2} />
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="img-fluid" src="asset/img/carousel-1.jpg" alt="Image" />
        <div className="carousel-caption d-flex align-items-center justify-content-center">
          <div className="p-5" style={{ width: "100%", maxWidth: 900 }}>
            <h5 className="text-primary text-uppercase mb-md-3">
              CONNECT
            </h5>
            <h1 className="display-3 text-white mb-md-4">
            To Get Willing Employees
            </h1>
            
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img className="img-fluid" src="asset/img/carousel-2.jpg" alt="Image" />
        <div className="carousel-caption d-flex align-items-center justify-content-center">
          <div className="p-5" style={{ width: "100%", maxWidth: 900 }}>
            <h5 className="text-primary text-uppercase mb-md-3">
            Connect
            </h5>
            <h1 className="display-3 text-white mb-md-4">
            To Get Good Job Opportunities
            </h1>
            
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img className="img-fluid" src="asset/img/carousel-3.jpg" alt="Image" />
        <div className="carousel-caption d-flex align-items-center justify-content-center">
          <div className="p-5" style={{ width: "100%", maxWidth: 900 }}>
            <h5 className="text-primary text-uppercase mb-md-3">
              Cleaning Services
            </h5>
            <h1 className="display-3 text-white mb-md-4">
              Experienced &amp; Expert Cleaners
            </h1>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    
     </ >
  )
}
