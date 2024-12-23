import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import NgoInfo from '../components/NgoInfo';
import NgoCollection from '../components/NgoCollection';
import Calendar from '../components/Calendar';
import Menu from '../components/Menu';
import CommunityForum from '../components/CommunityForum';
import Bookings from '../components/Bookings';
import RequirementStatus from '../components/RequirementStatus';
import './Dashboard.css'; // Import custom CSS
// import '@fortawesome/fontawesome-free/css/all.css';

const Dashboard = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    // console.log('function caleed')
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={` container container-fluid mt-3 ${isMenuOpen ? 'menu-open' : ''}`}>
      {/* Sidebar Menu */}
      <div className={`sidebar-menu ${isMenuOpen ? 'sidebar-menu-open' : ''}`}>
        <Menu />
      </div>
        < div className={`main-content ${isMenuOpen ? 'main-content-shifted' : ''}`}>
            <div className="row">
              {/* Top Component (full-width) */}
              <div className="col-12  mb-3 ngo-info" style={{border:'5px solid #f7f7f7'}}>
                <span className="menu-icon" onClick={toggleMenu} style={{ cursor: 'pointer' }}>
                  {isMenuOpen ? '❌' : '☰'} {/* You can replace these with actual icon components if you prefer */}
                </span>
                <NgoInfo
                  name="Sample NGO"
                  objective="To improve the quality of life for underprivileged communities through education and healthcare."
                  // logoUrl="https://via.placeholder.com/80"
                />
              </div>
            </div>
      


        <div className="row flex-grow-1">
          {/* Left Side (2 components stacked vertically) */}
          <div className="col-md-4 col-12 d-flex flex-column">
            <div className="mb-4 ngo-collection flex-fill">
              <NgoCollection />
            </div>
            <div className="community-forum flex-fill">
              <CommunityForum />
            </div>
          </div>

          {/* Center Component */}
          <div className="col-md-5 col-12  mb-3 calendar" style={{border:'5px solid #f7f7f7'}}>
            <Calendar />
          </div>

          {/* Right Side (Bookings) */}
          <div className="col-md-3 col-12 d-flex flex-column bookings">
            <div className=" flex-fill" style={{padding:'15px'}}>
              <Bookings />
            </div>
          </div>
        </div>

        {/* Bottom Component (full-width) */}
        <div className="row">
          <div className="col-12 requirement-status">
            <RequirementStatus />
          </div>
        </div>
      </div>
    </div>



  );
};

export default Dashboard;
