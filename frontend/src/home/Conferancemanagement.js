import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Conferancemanagement.css";
import Navbar from "./Navbar";
import Footer from './Footer';

function Conferancemanagement() {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({ title: "", image: "" });
  const [selectedService, setSelectedService] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:2000/conferanceget")
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  const handleAddService = () => {
    axios
      .post("http://localhost:2000/conferancepost", newService)
      .then((response) => {
        setServices([...services, response.data]);
        setNewService({ title: "", image: "" });
        setIsAdding(false);
      })
      .catch((error) => {
        console.error("Error adding service:", error);
      });
  };

  const handleDeleteService = (id) => {
    axios
      .delete(`http://localhost:2000/conferance/${id}`)
      .then(() => {
        setServices(services.filter((service) => service._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting service:", error);
      });
  };

  const handleUpdateService = () => {
    if (selectedService) {
      axios
        .put(
          `http://localhost:2000/conferance/${selectedService._id}`,
          selectedService
        )
        .then((response) => {
          const updatedServices = services.map((service) =>
            service._id === selectedService._id ? response.data : service
          );
          setServices(updatedServices);
          setSelectedService(null);
        })
        .catch((error) => {
          console.error("Error updating service:", error);
        });
    }
  };


  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container my-5 wed-decor">
        <div className="row align-items-center weddingdecor-section bg-light rounded p-4">
          <div className="col-md-6 text-md-start text-center weddingdecor-content">
            <h2 className="section-title mb-4 fw-bold">Conference Management</h2>
            <p className="section-description">
              At Event Plus Management, we specialize in creating and managing
              highly engaging and impactful conferences. With over 25 years of
              experience, our expertise in event conceptualization,
              state-of-the-art technical support, and comprehensive participant
              management ensures your conference stands out.
            </p>
          </div>
          <div className="col-md-6 text-center weddingdecor-image-container">
            <img
              src="https://e0.pxfuel.com/wallpapers/3/643/desktop-wallpaper-conference-meeting.jpg"
              alt="decor"
              className="img-fluid rounded weddingdecor-image"
            />
          </div>
        </div>
      </div>

     

      <div className="weddingdecor-services-section mt-5 bg-light rounded p-4">
        <h3 className="weddingdecor-services-title text-center mb-4">
          Conferance Management Services
        </h3>

        {!isAdding && !selectedService && (
          <div className="d-flex justify-content-center mb-3">
            <button
              className="btn btn-primary mx-2"
              onClick={() => setIsAdding(true)}
            >
              Add Service
            </button>
          </div>
        )}

        {isAdding && (
          <div className=" justify-content-center mb-3 ">
            <input
              type="text"
              placeholder="Service Name"
              value={newService.title}
              onChange={(e) =>
                setNewService({ ...newService, title: e.target.value })
              }
            />
            <br />
            <input
              type="text"
              placeholder="Image Link"
              value={newService.image}
              onChange={(e) =>
                setNewService({ ...newService, image: e.target.value })
              }
            />
            <br />
            <button className="btn btn-success mx-2" onClick={handleAddService}>
              Save
            </button>
          </div>
        )}

        {selectedService && (
          <div className="d-flex justify-content-center mb-3">
            <input
              type="text"
              placeholder="Updated Service Title"
              value={selectedService.title}
              onChange={(e) =>
                setSelectedService({
                  ...selectedService,
                  title: e.target.value,
                })
              }
            />
            <input
              type="text"
              placeholder="Updated Image URL"
              value={selectedService.image}
              onChange={(e) =>
                setSelectedService({
                  ...selectedService,
                  image: e.target.value,
                })
              }
            />
            <button
              className="btn btn-warning mx-2"
              onClick={handleUpdateService}
            >
              Save
            </button>
          </div>
        )}

        <div className="row weddingdecor-services-container mt-5">
          {services.map((service) => (
            <div className="col-6 col-md-3 mb-4" key={service._id}>
              <div className="weddingdecor-service-card p-3 rounded shadow-sm">
                <img
                  src={service.image || "https://via.placeholder.com/150"}
                  alt={service.title}
                  className="img-fluid rounded"
                />
                <p className="mt-2 text-center">{service.title}</p>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => setSelectedService(service)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => handleDeleteService(service._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Footer/>
      </div>

      
      
    </>
  );
}

export default Conferancemanagement;
