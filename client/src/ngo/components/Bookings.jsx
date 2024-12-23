// bookings section -shreya
import React from 'react'

const Bookings = () => {
  
    const containerStyle = {
      backgroundColor: '#f7f7f7',
      padding: '16px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '300px',
      padding: '40px',
      fontFamily: 'Arial, sans-serif',
      margintop: '10px',
      // border:'2px solid red'
    };
  
    const headingStyle = {
      fontSize: '20px',
      marginBottom: '15px',
      color: '#005fa3',
      textAlign: 'left',
      fontWeight:'bold'
    };
  
    const bookingCardStyle = {
      backgroundColor: '#e6e6e6',
      marginBottom: '10px',
      padding: '12px',
      width:'235px',
      borderRadius: '10px',
      border: '1px solid #ddd',
    };
  
    const highlightCardStyle = {
      ...bookingCardStyle,
      backgroundColor: '#e57dfd',
      color: '#fff',
    };
  
    const donorNameStyle = {
      fontWeight: 'bold',
      fontSize: '12px',
      marginBottom: '5px',
      color:'#005fa3',
    };
  
    const bookingDetailsStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '8px',
    };
  
    const extraInfoStyle = {
      display: 'block',
      fontSize: '8px',
      marginTop: '5px',
    };
  
    return (
      <div style={containerStyle}>
        <h4 style={headingStyle}>Upcoming Bookings:</h4>
        <hr />
        <div style={bookingCardStyle}>
          <div style={donorNameStyle}>Aditi Sharma</div>
          <div style={bookingDetailsStyle}>
            <span>07/12/2024</span>
            <span>Grocery</span>
          </div>
        </div>
      </div>
    );

}

export default Bookings;