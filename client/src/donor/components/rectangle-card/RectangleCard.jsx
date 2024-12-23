import React from 'react'
import './rectanglecard.css'
const RectangleCard = ({image, title, subtitle, additionalInfo}) => {
  return (
    <div>
      <div className="card">
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <h4 className="card-subtitle">{subtitle}</h4>
        <p className="card-text">{additionalInfo}</p>
      </div>
    </div>
    </div>
  )
}

export default RectangleCard
