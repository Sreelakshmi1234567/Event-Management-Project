import React, { useState, useEffect } from 'react';
import './Costomers.css';

const testimonials = [
  {
    name: 'Vikram',
    photo: 'https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain',
    quote: "Eventplus made our wedding decor a fairytale come true! The creativity and attention to detail were unparalleled. Recommends their wedding decor services for a touch of magic on your special day."
  },
  {
    name: 'Anjali',
    photo: 'https://th.bing.com/th/id/OIP.b4P6A6HQ6Gn4i0nJWT8YFgHaE8?rs=1&pid=ImgDetMain',
    quote: "Amazing event management services. Everything was organized perfectly, and the team was extremely professional. Highly recommended!"
  },
  {
    name: 'Ravi Kumar',
    photo: 'https://th.bing.com/th/id/OIP.NQOP4JC2aWAYfq-RFvPftgHaKJ?pid=ImgDet&w=184&h=251&c=7&dpr=1.3',
    quote: "Our corporate conference was a great success, thanks to Eventplus. The attention to detail and seamless execution was impressive."
  },
  {
    name: 'Arjun Nair',
    photo: 'https://pluspng.com/img-png/png-hd-handsome-man-business-man-businessman-hd-png-693.png',
    quote: "From start to finish, Eventplus made sure everything was perfect for our wedding. Couldn’t have asked for a better experience!"
  },
  {
    name: 'Rajeev',
    photo: 'https://th.bing.com/th/id/OIP.znWPXb6gbBJK83_nConj4wHaIx?pid=ImgDet&w=184&h=217&c=7&dpr=1.3',
    quote: "Professional, efficient, and made our anniversary party an unforgettable event. Highly recommend their services!"
  },
  {
    name: 'Neha',
    photo: 'https://th.bing.com/th/id/OIP.YfMHo9-wHoyAVWolpa0FGgHaKH?rs=1&pid=ImgDetMain',
    quote: "We hired Eventplus for our company’s annual event, and it was a huge hit. Great team, great service, amazing experience!"
  },
  {
    name: 'Ajay Das',
    photo: 'https://th.bing.com/th/id/OIP.leRaZskYpTKA55a0St0tZgHaJa?rs=1&pid=ImgDetMain',
    quote: "Eventplus exceeded our expectations in organizing our family reunion. We were thrilled with the outcome!"
  }
];

const Costomers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); 

    return () => clearInterval(interval); 
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const { name, photo, quote } = testimonials[currentIndex];

  return (
    <div className="container testimonial-container">
      <h2 className="testimonial-heading">Hear from Trusted Clients</h2>
      <div className="row testimonial-content">
        <div className="col-md-3 d-flex justify-content-center testimonial-profile">
          <img src={photo} alt="Customer" className="profile-photo" />
          <div className="profile-details">
            <h3>{name}</h3>
          </div>
        </div>
        <div className="col-md-9 d-flex align-items-center">
          <p className="testimonial-quote">"{quote}"</p>
        </div>
      </div>
      <div className="testimonial-navigation">
        <button onClick={prevTestimonial} className="prev-btn">←</button>
        <span>{currentIndex + 1} / {testimonials.length}</span>
        <button onClick={nextTestimonial} className="next-btn">→</button>
      </div>
    </div>
  );
};

export default Costomers;
