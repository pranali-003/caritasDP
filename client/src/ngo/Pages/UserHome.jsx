import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg";
import SearchNgo from "../components/SearchNgo";

const UserHome = () => {
  const carouselContainerStyle = {
    margin: "auto",
    maxWidth: "800px",
    borderRadius: "15px",
    overflow: "hidden",
    marginTop: "20px",
  };

  const carouselStyle = {
    borderRadius: "15px",
  };

  const imgStyle = {
    height: "400px",
    objectFit: "cover",
    borderRadius: "15px",
  };

  const indicatorStyle = {
    backgroundColor: "#FF5733", // Use a vibrant color
    borderRadius: "50%",
    width: "10px",
    height: "10px",
  };

  const controlIconStyle = {
    filter: "invert(100%)", // Change icon color to white
    opacity: 0.8,
  };

  // Simple countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 13,
    hours: 12,
    minutes: 4,
    seconds: 78,
  });

  // Simulate countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => ({
        ...prev,
        seconds: prev.seconds > 0 ? prev.seconds - 1 : 59,
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Sticky Header Section */}
      <nav
        className="navbar navbar-expand-lg navbar-light sticky-top shadow-sm"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="container">
          {/* Logo Section */}
          <a className="navbar-brand" href="/">
            <img
              src="logo.png"
              alt="CARITAS"
              className="img-fluid"
              style={{ height: "50px", marginRight: "15px" }}
            />
          </a>

          {/* Username Section */}
          <div className="ml-auto d-flex align-items-center">
            <span
              className="badge rounded-pill"
              style={{
                backgroundColor: "#1270b0",
                color: "white",
                padding: "10px 20px",
                fontSize: "16px",
              }}
            >
              Hello, Username
            </span>
          </div>
        </div>
      </nav>

      <div className="container mt-5" style={{ maxHeight: "400px" }}>
        <div className="row" style={{ height: "100%" }}>
          {/* My Birthday Section */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <div
              className="card h-100 shadow-lg"
              style={{ backgroundColor: "#FFEBCC", border: "none" }}
            >
              <div className="card-body p-4">
                <h5 className="card-title" style={{ color: "#D35400" }}>
                  My Birthday
                </h5>
                <p className="card-text" style={{ color: "#D35400" }}>
                  13 Days to go...
                </p>
                <div
                  className="p-2 rounded"
                  style={{ backgroundColor: "#D35400", color: "white" }}
                >
                  {timeLeft.days} days : {timeLeft.hours} hrs :{" "}
                  {timeLeft.minutes} min : {timeLeft.seconds} sec
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Occasions Section */}
          <div className="col-12 col-md-6">
            <div
              className="card h-100 shadow-lg"
              style={{ backgroundColor: "#D1F2EB", border: "none" }}
            >
              <div className="card-body p-4">
                <h5 className="card-title" style={{ color: "#148F77" }}>
                  Upcoming Occasions
                </h5>
                <div className="d-flex justify-content-between">
                  {/* Placeholder boxes for occasions */}
                  <div
                    className="card p-4 text-white"
                    style={{
                      backgroundColor: "#148F77",
                      width: "60px",
                      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                    }}
                  ></div>
                  <div
                    className="card p-4 text-white"
                    style={{
                      backgroundColor: "#148F77",
                      width: "60px",
                      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                    }}
                  ></div>
                  <div
                    className="card p-4 text-white"
                    style={{
                      backgroundColor: "#148F77",
                      width: "60px",
                      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                    }}
                  ></div>
                  <div
                    className="card p-4 text-white"
                    style={{
                      backgroundColor: "#148F77",
                      width: "60px",
                      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      {/* Carousel Section */}
      <div style={carouselContainerStyle}>
        <div
          id="carouselExampleIndicators"
          className="carousel slide shadow-lg"
          data-bs-ride="carousel"
          style={carouselStyle}
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
              style={indicatorStyle}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              style={indicatorStyle}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              style={indicatorStyle}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
              style={indicatorStyle}
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
              style={indicatorStyle}
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={Img1}
                className="d-block w-100"
                alt="First Image"
                style={imgStyle}
              />
            </div>
            <div className="carousel-item">
              <img
                src={Img2}
                className="d-block w-100"
                alt="Second Image"
                style={imgStyle}
              />
            </div>
            <div className="carousel-item">
              <img
                src={Img3}
                className="d-block w-100"
                alt="Third Image"
                style={imgStyle}
              />
            </div>
            <div className="carousel-item">
              <img
                src={Img1}
                className="d-block w-100"
                alt="Fourth Image"
                style={imgStyle}
              />
            </div>
            <div className="carousel-item">
              <img
                src={Img2}
                className="d-block w-100"
                alt="Fifth Image"
                style={imgStyle}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
              style={controlIconStyle}
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
              style={controlIconStyle}
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <SearchNgo />
    </div>
  );
};

export default UserHome;
