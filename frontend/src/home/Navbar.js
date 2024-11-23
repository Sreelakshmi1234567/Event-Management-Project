import React, { useState } from "react";
import logo from "./eventplus.jpg";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isServicesActive, setIsServicesActive] = useState(false);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const toggleServices = () => {
    setIsServicesActive(!isServicesActive);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  const navigate = useNavigate();

  const handlehome = () => {
    navigate("/home");
  };
  const handleabout = () => {
    navigate("/about");
  };

  const handlecontact = () => {
    navigate("/contact");
  };

  const handlesignup = ()=>{
    navigate('/')
  }

  const handledecor = () => {
    navigate("/weddingdecor");
  };
  const handlewedding = () => {
    navigate("/weddingmanagement");
  };
  const handleconferancemanagement = () => {
    navigate("/conferancemanagement");
  };
  const handleproductlaunch = () => {
    navigate("/productlaunch");
  };
  const handleawardcerimonies = () => {
    navigate("/awardcerimonies");
  };


  return (
    <>
      <div className={`navbar-container ${isMobileMenuActive ? "active" : ""}`}>
        <div className="logo">
          <img src={logo} alt="Event Plus Logo" className="footer-logo" />
        </div>
        <div className="nav-items">
          <a onClick={handlehome}>Home</a>
          <a onClick={handleabout}>About</a>

          <div
            className={`services-toggle ${isServicesActive ? "active" : ""}`}
            onClick={toggleServices}
          >
            <a>Services</a>
            <div className="services-dropdown-content">
              <a onClick={handledecor}>Wedding Decor</a>
              <a onClick={handlewedding}>Wedding Management</a>
              <a onClick={handleconferancemanagement}>Conference Management</a>
              <a onClick={handleproductlaunch}>Product Launch</a>
              <a onClick={handleawardcerimonies}>Award Ceremonies</a>
            </div>
          </div>

          <a onClick={handlecontact}>Contact</a>
          <a onClick={handlesignup}>Logout</a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fa-brands fa-square-instagram mx-3"
              style={{ color: "magenta" }}
            ></i>
          </a>
         
        </div>

        <div className="hamburger-icon" onClick={toggleMobileMenu}>
          &#9776;
        </div>
      </div>
    </>
  );
}

export default Navbar;
