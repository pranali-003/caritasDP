// Layout.js
import React from 'react';
import Navbar from '../navbar/Navbar'; // Your Navbar component
import Footer from '../footer/Footer'
import './layout.css'; // Any styles for your layout

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
