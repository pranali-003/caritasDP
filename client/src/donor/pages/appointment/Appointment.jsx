import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './appointment.css'
import { toast } from 'react-toastify';

const Appointment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  
  // Destructuring cart and ngoDetails, and providing default empty array for cart
  const { cart , ngoDetails } = state || {};
  console.log(cart);
  const [appointmentDetails, setAppointmentDetails] = useState({
    date: '',
    time: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentDetails({ ...appointmentDetails, [name]: value });
  };

  const confirmAppointment = () => {
    if (!appointmentDetails.date || !appointmentDetails.time) {
      alert('Please select a date and time!');
      return;
    }

    // Show success message and navigate to a confirmation page or back to home
    // alert('Appointment confirmed successfully!');
    toast.success('Appointed Booked Succesfully !', { position: "top-center" });
    navigate('/appointment_success');
  };

  return (
    <div className="appointment-container">
      <h2>Donation Appointment</h2>
      <p>
        <strong>NGO Name:</strong> {ngoDetails?.name}
      </p>
      <p>
        <strong>Address:</strong> {ngoDetails?.address}
      </p>
      <p>
        <strong>Contact:</strong> {ngoDetails?.contact}
      </p>

      <div className="cart-details">
        <h3>Your Donation Cart</h3>
        <ul>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <li key={index}>
                {item.subcategory} - {item.quantity} items
              </li>
            ))
          ) : (
            <p>No items in the cart.</p>
          )}
        </ul>
      </div>

      {/* Add any additional details related to the appointment here */}
      <div>
        <h3>Appointment Details</h3>
        <div>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={appointmentDetails.date}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Time:
            <input
              type="time"
              name="time"
              value={appointmentDetails.time}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <button
          onClick={confirmAppointment}
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Confirm Appointment
        </button>
      </div>
    </div>
  );
};

export default Appointment;
