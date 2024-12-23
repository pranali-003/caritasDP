import React from "react";
import "./PageNotFound.css";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const navigate = useNavigate();
  const handleBackToHome = () => {
    navigate('/donor_home')
  };

  return (
    <div className="page-not-found-container">
      <div className="error-icon">
        <div className="sad-face">😞</div>
      </div>
      <h1 className="error-message">404 - Page Not Found</h1>
      <p className="error-description">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <button className="back-to-home-btn" onClick={handleBackToHome}>
        Back to Home
      </button>
    </div>
  );
};

export default PageNotFound;
