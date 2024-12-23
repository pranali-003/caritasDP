import React from 'react';
import './styles/Menu.css'

const Menu = () => {
  return (
    <div className="d-flex flex-column p-3 bg-light" style={{ width: '250px', height: '100vh' }}>
      {/* Close Button */}
     {/* <button type="button" className="btn-close mb-3 align-self-end" aria-label="Close"></button> */}
     

      {/* Search Bar */}
      {/* <form className="d-flex mb-3">
        <input
          type="search"
          placeholder="Search"
          className="form-control"
          aria-label="Search"
        />
      </form> */}

      {/* Menu Items */}
      <ul className="list-group list-group-flush">
        <li className="list-group-item mb-2 rounded">Edit Profile</li>
        <li className="list-group-item mb-2 rounded">Edit Requirements</li>
        <li className="list-group-item mb-2 rounded">Edit Intake</li>
        <li className="list-group-item mb-2 rounded">Achievements</li>
        <li className="list-group-item mb-2 rounded">Photos</li>
        <li className="list-group-item mb-2 rounded">Receipts</li>
        <li className="list-group-item mb-2 rounded">Find Volunteers</li>
        <li className="list-group-item mb-2 rounded">Manage Forum</li>
      </ul>
    </div>
  );
};

export default Menu;
