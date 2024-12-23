// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const Checkout = ({ cartItems, confirmBooking }) => {
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   return (
//     <div className="container mt-4">
//       <h3>Checkout</h3>
//       {cartItems.length > 0 ? (
//         <>
//           <ul className="list-group mb-4">
//             {cartItems.map((item, index) => (
//               item.qty > 0 && (
//                 <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
//                   {item.item}
//                   <span className="badge bg-primary rounded-pill">{item.qty}</span>
//                 </li>
//               )
//             ))}
//           </ul>

//           <div className="mb-3">
//             <label>Select Appointment Date & Time</label>
//             {/* <DatePicker
//               selected={selectedDate}
//               onChange={handleDateChange}
//               showTimeSelect
//               timeFormat="HH:mm"
//               timeIntervals={15}
//               timeCaption="time"
//               dateFormat="MMMM d, yyyy h:mm aa"
//               className="form-control"
//             /> */}
//           </div>

//           <button className="btn btn-success" onClick={() => confirmBooking(selectedDate)}>Book Appointment</button>
//         </>
//       ) : <p>No items to checkout.</p>}
//     </div>
//   );
// };

// export default Checkout;
