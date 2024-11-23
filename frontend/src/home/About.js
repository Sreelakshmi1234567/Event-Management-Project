import React from 'react';
import Navbar from './Navbar';
import './About.css';
import Footer from './Footer'

function About() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="about-section container text-center py-5">
        <h1 className="display-4 fw-bold mb-4 mt-5">About.</h1>
        <p className="lead mx-auto mb-5">
          We are one of the leading Event Management & Wedding Planning companies in Kerala.
          We celebrate your love, success, health & wellbeing by organizing powerful 
          & unforgettable celebrations. We create your best day, and the best memory ever!
        </p>
        
        <div className="row justify-content-center">
          <div className="col-12 col-md-4 mb-4 px-3">
            <img
              src="https://i.pinimg.com/originals/15/e6/2e/15e62e1882f924d1886432d27460e026.jpg"
              alt="Event 1"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-12 col-md-4 mb-4 px-3">
            <img
              src="https://i.pinimg.com/originals/4e/b5/00/4eb500a6bb95f411d5fe1b6ebbca1a8c.jpg"
              alt="Event 2"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-12 col-md-4 mb-4 px-3">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2023/11/362826794/VH/FI/PR/156622708/wedding-event-management-service-1000x1000.jpg"
              alt="Event 3"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>

      <div className="vision-section container d-flex align-items-center py-5">
      <div className="vision-text col-md-6">
        
        <h2 className="display-5 fw-bold">Driven By A Good Vision</h2>
        <p className="lead mt-3">
          Our vision is to establish ourselves as the foremost event management company in India,
          dedicated to crafting experiences that etch cherished memories into the tapestry of your life. 
          We aspire to create impactful and transformational events that not only celebrate your success 
          but also translate it into tangible value. Our commitment is to consistently meet and exceed 
          your expectations, fueled by a combination of excellent ideas and flawless execution. 
          We envision a future where every event we undertake becomes a milestone in your journey, 
          leaving an indelible mark on your memory lane that lasts a lifetime.
        </p>
      </div>
      <div className="vision-image col-md-6">
        <img
          src="https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2019/07/image102.jpg"
          
          alt="Event Vision"
          className="img-fluid rounded"
        />
      </div>
    </div>

    <div>
      <Footer/>
    </div>
    </>
  );
}

export default About;
