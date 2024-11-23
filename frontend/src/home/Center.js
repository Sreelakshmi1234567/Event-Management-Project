import React, { useState, useEffect, useRef } from "react";
import "./Center.css";
import { useNavigate } from "react-router-dom";

function Center() {
  const images = [
    "https://i.pinimg.com/originals/2a/66/e0/2a66e040a3cdcdf991e0727c05cacbf3.jpg",
    "https://d397bfy4gvgcdm.cloudfront.net/364360-Ayesha-ShrayHaldi-42-orig.jpeg",
    "https://symphonyevents.com.au/wp-content/uploads/2021/08/Wedding-Planner-Sydney-Banner.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const [count, setCount] = useState(1);
  const experienceRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          animateCount();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCount = () => {
    let start = 1;
    const interval = setInterval(() => {
      setCount(start);
      if (start === 4) {
        clearInterval(interval);
      }
      start += 1;
    }, 200);
  };

  const navigate=useNavigate();
  const handlecta=()=>{
    navigate('/contact')
  }

  return (
    <>
      <header className="hero-section">
        <div className="hero-images">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={`image ${index === currentImage ? "active" : ""}`}
            />
          ))}
        </div>
        <h2 className="heropara">
          Kerala's leading Event & Wedding Management Company
        </h2>
        <button className="cta-button" onClick={handlecta}>Let's talk — Send a message</button>
      </header>

      <div className="experience-section" ref={experienceRef}>
        <div className="experience-left">
          <p>
            Providing experience that makes you cherish your memory lane
            lifelong. <br />
            Impactful & Transformational events that turn your success into
            money.
          </p>
        </div>

        <div className="experience-right">
          <span className="experience-years">
            {count}
            <span className="static-zero">0</span>
          </span>
          <span className="experience-text">+ Years of experience</span>
        </div>
      </div>
    </>
  );
}

export default Center;
