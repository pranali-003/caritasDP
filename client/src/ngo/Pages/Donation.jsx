import React, { useState } from 'react';
import ItemSelection from '../components/ItemSelection';
import Cart from '../components/Cart'
// import Checkout from './Checkout';
import Confirmation from '../components/Confirmation';

const Donation = () => {
  const [cartItems, setCartItems] = useState([]);
  // const [checkout, setCheckout] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState(null);

  const addToCart = (items) => {
    setCartItems(items);
    console.log(items);
    // setCheckout(false);
  };

  // const handleCheckout = () => {
  //   setCheckout(true);
  // };

  const confirmBooking = (date) => {
    setAppointmentDate(date);
    setConfirmed(true);
  };

  return (
    <div className="container">
      {!confirmed  && <ItemSelection addToCart={addToCart} />}
      {<Cart cartItems={cartItems}/>}
      {/* {!confirmed && checkout && <Checkout cartItems={cartItems} confirmBooking={confirmBooking} />} */}
      {confirmed && <Confirmation appointmentDate={appointmentDate} />}
    </div>
  );
};

export default Donation;
