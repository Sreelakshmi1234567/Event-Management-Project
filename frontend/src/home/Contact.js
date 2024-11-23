import React from "react";
import Navbar from "./Navbar";
import './Contact.css'
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="contact-form-container container d-flex justify-content-center align-items-center">
        <form className="contact-form p-4">
          <h2 className="contact-h2 mb-4">Send a Message</h2>
          <input type="text" className="form-control mb-3" placeholder="Name" />
          <input type="email" className="form-control mb-3" placeholder="Email" />
          <input type="tel" className="form-control mb-3" placeholder="Phone" />
          <textarea className="form-control mb-3" placeholder="Message" rows="4"></textarea>
          <button type="submit" className="btn w-100">Send a Message</button>
        </form>
      </div>


      <div className="contact-info container d-flex justify-content-center">
      <div className="row g-0 w-100" style={{ maxWidth: "900px" }}>
        <div className="col-md-6 info-head text-center">
          <h5 className="info-heading">ADDRESS</h5>
          <p>
            V1, Gala No. 24, Mehra Industrial Estate,<br />
            Andheri - Kurla Road, Near DSK Madhuban,<br />
            Opp. Sakinaka Telephone Exchange,<br />
            Palakkad - 678701.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <h5 className="info-heading">CONTACT</h5>
          <p>
            <i className="fa-solid fa-envelope" style={{ color: 'red', marginRight: '8px' }}></i> shivani@eventplus.co.in<br />
            <i className="fa-solid fa-phone" style={{ color: 'blue', marginRight: '8px' }}></i> 9820520566 / 9820039162
          </p>
        </div>
      </div>
    </div>

    <div>
      <Footer/>
    </div>
    </>
  );
}

export default Contact;
