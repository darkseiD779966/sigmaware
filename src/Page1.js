import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./page1.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import "animate.css";
function Page1() {
  return (
   <div>

   <section id="Page1">
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className='banner' style={{ backgroundImage: "url(images/lol.jpg)" }}></div>
            <div className="carousel-caption">
              <h1 className='animate__animated animate__fadeInTopLeft'>We are <span>Innovative</span></h1>
              
              <h3 className='animate__animated animate__fadeInBottomLeft'>Some representative placeholder content for the first slide.</h3>
            <p><a className="animate__animated animate__flip" href="#">Contact Us</a></p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className='banner' style={{ backgroundImage: "url(images/lol1.jpg)" }}></div>
            <div className="carousel-caption ">
            <h1 className='animate__animated animate__fadeInTopLeft' >We are <span>Innovative</span></h1>
              
              <h3 className='animate__animated animate__fadeInBottomLeft'>Some representative placeholder content for the first slide.</h3>
            <p><a className="animate__animated animate__flip" href="#">Contact Us</a></p>
            </div>
          </div>
          <div className="carousel-item">
            <div className='banner' style={{ backgroundImage: "url(images/lol2.jpg)" }}></div>
            <div className="carousel-caption ">
            <h1 className='animate__animated animate__fadeInTopLeft'>We are <span>Innovative</span></h1>
              
              <h3 className='animate__animated animate__fadeInBottomLeft'>Some representative placeholder content for the first slide.</h3>
            <p><a className="animate__animated animate__flip" href="#">Contact Us</a></p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    <section id="page2">
      <div className='page2 container-fluid'>
        <h1><span>what </span>  we do</h1>
        <div className='arishem'>
<div className='row'>
  <div className=' cards col-sm-12 col-md-12 col-xl-4'>
<img src="images/lil1.png" alt="" />
<h3>Project Service</h3>
  <p>We support enterprise products, end-user devices and, software applications, giving you single-vendor coverage for all your support services and solutions. Our server and networking expertise helps us provide support and services to our customers located in every corner of the world.</p>
  <span>Read more...</span>
  </div>
  <div className=' cards col-sm-12 col-md-6 col-xl-4'>
<img src="images/lil2.png" alt="" />
<h3>Support</h3>
  <p>We support enterprise products, end-user devices and, software applications, giving you single-vendor coverage for all your support services and solutions. Our server and networking expertise helps us provide support and services to our customers located in every corner of the world.</p>
  <span>Read more...</span>
  </div>
  <div className=' cards col-sm-12 col-md-6 col-xl-4'>

<img src="images/lil3.png" alt="" />
<h3>Maintainance</h3>
  <p>We support enterprise products, end-user devices and, software applications, giving you single-vendor coverage for all your support services and solutions. Our server and networking expertise helps us provide support and services to our customers located in every corner of the world.</p>
  <span>Read more...</span>
  </div>
</div>
</div>
      </div>
    </section>
    <section id='page3'>
      
        <div className='container-fluid dabur'>
          <div className='content-section'>
            <h1>about<span>us</span>
            </h1>
            <p>
           At Axiom, we excel at digital product engineering and deliver on our promise of thinking breakthroughs.

The Spirit of Axiom Technologies is the core of Axiom Technologies. These are our Values. It is about who we are. It is our character. Axiom Technologies is focused on helping customers solve complex business challenges using innovative technology solutions. We help our clients with IT Managed Services, Procurement Services, Globally Maintenance Support & Resource Recruitment which make their organization productivity. Axiom Technologies combines the power of a domain, enterprise, and digital technologies to reimagine business processes for customers and their ecosystem. Its consultative and design thinking approach makes societies more productive by helping customers run businesses.
            </p>
            <span className='ore'>read more...</span>

          </div>
          <div className='image-section'>
            <img src="images/about.jpg" />
          </div>
        
        

      </div>
    </section>
    </div> 
  )
}

export default Page1;
