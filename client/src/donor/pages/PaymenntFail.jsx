import React from "react";
import "./paymentFail.css";
import {useNavigate} from "react-router-dom"


const PaymenntFail = () => {
  
    const navigate= useNavigate();
    const handleBackToHome = () => {
      // Redirect to the home page
      navigate('/donor_home')
    };
  
  return (
    <div className="payment-fail-container">
      <div className="fail-icon">
        <div className="cross-icon">✖</div>
      </div>
      <h1 className="fail-message">Payment Failed</h1>
      <p className="fail-description">
        Something went wrong. Please try again or contact support.
      </p>
      <button className="back-to-home-btn" onClick={handleBackToHome}>
        Back to Home
      </button>
    </div>
  );
};

export default PaymenntFail;
