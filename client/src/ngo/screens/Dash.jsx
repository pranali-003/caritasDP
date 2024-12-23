import React, { useState } from 'react';
import NgoInfo from '../components/NgoInfo';
import NgoCollection from '../components/NgoCollection';
import Calendar from '../components/Calendar';
import Menu from '../components/Menu';
import CommunityForum from '../components/CommunityForum';
import Bookings from '../components/Bookings';
import RequirementStatus from '../components/RequirementStatus';
import './Dashboard.css';

const Dashboard = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container container-fluid mt-3">
      <div className="row ngo-info" >
          <div className="col-12 border border-danger mb-3">
            <NgoInfo />
            <button className="btn btn-primary mt-2" onClick={toggleMenu}>
              Toggle Menu
            </button>
          </div>
          <div className={`collapse ${isMenuOpen ? 'show' : ''} border border-danger mb-3 col-md-4 col-12 menu`}>
            <Menu />
          </div>
      <div/>  
        <div>
          {/* NGO Collection */}
          <div className="border border-danger mb-3 ngo-collection">
            <NgoCollection />
          </div>

          {/* Community Forum */}
          <div className="border border-danger community-forum">
            <CommunityForum />
          </div>
        </div>

        {/* Central part (Calendar) */}
        <div>
          <div className="col-md-6 col-12 border border-danger mb-3 calendar">
            <Calendar />
          </div>
        </div>
     

        {/* Right side (Bookings, Requirement Status) */}
        <div>
             {/* Bookings */}
          <div className="border border-danger mb-3 bookings">
            <Bookings />
          </div>

          {/* Requirement Status */}
            <div className=" border border-danger requirement-status ">
            <RequirementStatus />
        </div>
  
         
          </div>
        </div>
      </div>



  );
};

export default Dashboard;
