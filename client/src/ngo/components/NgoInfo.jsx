import React from 'react';
import './styles/NgoInfo.css'; // Import custom styles
import logo from '../../assets/logo.jpeg'

const NgoInfo = ({ name, objective }) => {
  return (
    <div className="ngo-info-container">
      <img src={logo} alt={`${name} Logo`} className="ngo-logo" />
      <div className="ngo-details">
        <h1 className="ngo-name">Lion's Bal Sadan </h1>
        <p className="ngo-objective">{objective}</p>
      </div>
    </div>
  );
};

export default NgoInfo;

