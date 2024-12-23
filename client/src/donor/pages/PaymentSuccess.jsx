import React from "react";
import "./paymentSuccess.css";
import {useNavigate} from "react-router-dom"

const PaymentSuccess = () => {
    const navigate= useNavigate();
  const handleBackToHome = () => {
    // Redirect to the home page
    navigate('/donor_home')
  };

  return (
    <div className="payment-success-container">
      <div className="success-icon">
        <div className="checkmark">✔</div>
      </div>
      <h1 className="success-message">Payment Successful</h1>
      <button className="back-to-home-btn" onClick={handleBackToHome}>
        Back to Home
      </button>
    </div>
  );
};

export default PaymentSuccess;
