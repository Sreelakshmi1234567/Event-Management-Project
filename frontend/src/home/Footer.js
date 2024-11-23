

import React from "react";
import { useNavigate } from "react-router-dom";
import logo from './eventplus.jpg';
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const handledecor = () => {
    navigate('/weddingdecor');
  };
  const handlewedding = () => {
    navigate('/weddingmanagement');
  };
  const handleconferancemanagement = () => {
    navigate('/conferancemanagement');
  };
  const handleproductlaunch = () => {
    navigate('/productlaunch');
  };
  const handleawardcerimonies = () => {
    navigate('/awardcerimonies');
  };

  const handleabout = () => {
    navigate('/about');
  };

  const handlecontact = () => {
    navigate('/contact');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-between">

          <div className="col-md-3 mb-4 footer-section">
            <img src={logo} alt="Event Plus Logo" className="footer-logo" />
            <p>shivani@eventplus.co.in</p>
            <p className="footer-contact">
              <i className="fa-solid fa-phone" style={{ marginRight: '10px', color: 'blue' }}></i>
              +91 123 456 7890
            </p>
            <p className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Scroll to top</p>

            {/* Social Icons Section */}
            <div className="social-icons mt-3">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-square-instagram mx-2" style={{ color: 'magenta' }}></i>
              </a>
              <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-square-whatsapp mx-2" style={{ color: 'green' }}></i>
              </a>
            </div>
          </div>

          <div className="col-md-3 mb-4 footer-section">
            <h5 className="footer-title"><u>Services</u></h5>
            <p onClick={handledecor} className="footer-link">Wedding Decor</p>
            <p onClick={handlewedding} className="footer-link">Wedding Management</p>
            <p onClick={handleconferancemanagement} className="footer-link">Conference Management</p>
            <p onClick={handleproductlaunch} className="footer-link">Product Launch</p>
            <p onClick={handleawardcerimonies} className="footer-link">Award Ceremonies</p>
          </div>

          <div className="col-md-3 mb-4 footer-section">
            <h5 className="footer-title"><u>Pages</u></h5>
            <p className="footer-link" onClick={handleabout}>About</p>
            <p className="footer-link" onClick={handlecontact}>Contact</p>
          </div>

          <div className="col-md-3 mb-4 footer-section">
            <h5 className="footer-title"><u>Company</u></h5>
            <p className="footer-link">Terms & Conditions</p>
            <p className="footer-link">Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

