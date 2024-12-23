import React from 'react'
import './footer.css'

const Footer = () => {
  let year = new Date().getFullYear();
  // alert(year);
  return (
    <div className="footer">
     @ {year} Caritas | All rights reserved
    </div>
  )
}

export default Footer;
