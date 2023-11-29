import React from 'react'

export default function Baseworker() {
  return (
    <>

<>
  
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
              Cleaning Services
            </h5>
            <h1 className="display-3 text-white mb-md-4">
              Best Quality Solution In Cleaning
            </h1>
            <a href="" className="btn btn-primary">
              Get A Quote
            </a>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img className="img-fluid" src="asset/img/carousel-2.jpg" alt="Image" />
        <div className="carousel-caption d-flex align-items-center justify-content-center">
          <div className="p-5" style={{ width: "100%", maxWidth: 900 }}>
            <h5 className="text-primary text-uppercase mb-md-3">
              Cleaning Services
            </h5>
            <h1 className="display-3 text-white mb-md-4">
              Highly Professional Cleaning Services
            </h1>
            <a href="" className="btn btn-primary">
              Get A Quote
            </a>
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
            <a href="" className="btn btn-primary">
              Get A Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>


    </>
  )
}
