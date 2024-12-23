import React from "react";
import "./AppointmentSuccess.css";
import {useNavigate} from "react-router-dom"

const AppointmentSuccess = () => {
    const navigate=useNavigate();
  const handleBackToHome = () => {
    // Redirect to the home page
    navigate('/donor_home')
  };

  return (
    <div className="appointment-success-container">
      <div className="success-icon">
        <div className="checkmark">✔</div>
      </div>
      <h1 className="success-message">Appointment Booked Successfully</h1>
      <p className="success-description">
        Your appointment has been successfully booked. We look forward to seeing you!
      </p>
      <button className="back-to-home-btn" onClick={handleBackToHome}>
        Back to Home
      </button>
    </div>
  );
};

export default AppointmentSuccess;
