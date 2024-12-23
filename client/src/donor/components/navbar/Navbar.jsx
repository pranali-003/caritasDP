import React from 'react'
import './navbar.css'
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../../../assets/logo.png';
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
const navigate = useNavigate();
const viewDonorDetails=()=>{
  navigate('/donor_profile')
}
const handleScroll = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
  return (
    <div className="nav">
      <div className="nav-left">
        <img src={logo} alt="" className="logo" />
        <a onClick={() => handleScroll('find-ngo')}>Find Ngo</a>
        <a onClick={() => handleScroll('donate')}>Donate</a>
        <a onClick={() => handleScroll('about')}>About</a>
      </div>
      <div className="nav-right">
      <div  className="icon">
          <FaHeart size={23} /> {/* Heart icon */}
        </div>
        <div className="icon">
          <FaShoppingCart  size={23} /> {/* Shopping cart icon */}
        </div>
        <div className="icon">
          <FaUser size={23} onClick={viewDonorDetails}/> {/* User icon */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
