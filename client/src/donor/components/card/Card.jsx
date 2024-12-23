import React from 'react';
import './Card.css';
import {useNavigate} from "react-router-dom";
const Card =({image, title, subtitle, additionalInfo}) =>{
  const navigate = useNavigate();
  const viewNgo=()=>{
    navigate('/donation_info'), { state: { ngoDetails } };
  }
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <h4 className="card-subtitle">{subtitle}</h4>
        <p className="card-text">{additionalInfo}</p>
        <div className="card-buttons">
          <button onClick={viewNgo} className="button view-button">View</button>
          {/* <button className="button donate-button">Donate</button> */}
        </div>
      </div>
    </div>
  );
}


export default Card;
