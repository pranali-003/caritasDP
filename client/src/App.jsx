// import React,{useState} from 'react'
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Register from './donor/pages/register/Register'
// import Login from './donor/pages/login/Login'
// import Profile from './donor/pages/profile/Profile'
// import FindNgo from './donor/pages/FindNgo/FindNgo'
// import EditProfile from './donor/pages/editProfile/EditProfile'
// import EditProfileBox from './donor/components/editProfileBox/EditProfileBox';
// import DonationInfo from './donor/pages/donationInfo/DonationInfo'
// import Appointment from './donor/pages/appointment/Appointment'
// import PaymentSuccess from './donor/pages/PaymentSuccess'
// import PaymenntFail from './donor/pages/PaymenntFail'
// import AppointmentSuccess from './donor/pages/appointmentSucess/AppointmentSuccess';
// import PageNotFound from './donor/pages/PageNotFound';
// import LandingPage from './landingweb/LandingPage';
// import NgoLogin from './ngo/Pages/Nlogin/NgoLogin'
// import Dashboard from './ngo/screens/Dashboard'
// const App = () => {

//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems((prevItems) => [...prevItems, item]);
//   };
//   return (
//     <>
//     <Router>
//         <Routes>
//             <Route path="/donor_register" element={<Register/>}></Route>
//             <Route path="/donor_login" element={<Login/>}></Route>
//             <Route path="/donor_home" element={<Profile/>}></Route>
//             <Route path="/ngo_details" element={<FindNgo/>}></Route>
//             <Route path="/donor_profile" element={<EditProfile/>}></Route>
//             <Route path="/donor_profile/edit_donor_profile" element={<EditProfileBox/>}></Route>
//             <Route path="/donation_info" element={<DonationInfo/>}></Route>
//             <Route path="/appointment" element={<Appointment/>}></Route>
//             <Route path="/payment_success" element={<PaymentSuccess/>}></Route>
//             <Route path="/payment_fail" element={<PaymenntFail/>}></Route>
//             <Route path="/appointment_success" element={<AppointmentSuccess/>}></Route>
//             <Route path="*" element={<PageNotFound/>}></Route>
//             <Route path="/" element={<LandingPage/>}></Route>
//             <Route path="/ngo_login" element={<NgoLogin/>}></Route>
//            <Route path ='/ngo_dashboard' element= {<Dashboard/>}></Route>
//      {/* <Route path ='/home' element= {<UserHome/>}></Route>
//     <Route path ='/ngoInfo' element= {<NgoInfo/>}></Route>
//     <Route path ='/donate' element= {<Donation/>}></Route>
//     <Route path ='/cart' element= {<Cart/>}></Route> */}
//         </Routes>
//     </Router>
//     </>
//   )
// }

// export default App

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

import Register from './donor/pages/register/Register';
import Login from './donor/pages/login/Login';
import Profile from './donor/pages/profile/Profile';
import FindNgo from './donor/pages/FindNgo/FindNgo';
import EditProfile from './donor/pages/editProfile/EditProfile';
import EditProfileBox from './donor/components/editProfileBox/EditProfileBox';
import DonationInfo from './donor/pages/donationInfo/DonationInfo';
import Appointment from './donor/pages/appointment/Appointment';
import PaymentSuccess from './donor/pages/PaymentSuccess';
import PaymenntFail from './donor/pages/PaymenntFail';
import AppointmentSuccess from './donor/pages/appointmentSucess/AppointmentSuccess';
import PageNotFound from './donor/pages/PageNotFound';
import LandingPage from './landingweb/LandingPage';
import NgoLogin from './ngo/Pages/Nlogin/NgoLogin';
import Dashboard from './ngo/screens/Dashboard';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <>
      <Router>
        {/* Add ToastContainer here */}
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route path="/donor_register" element={<Register />} />
          <Route path="/donor_login" element={<Login />} />
          <Route path="/donor_home" element={<Profile />} />
          <Route path="/ngo_details" element={<FindNgo />} />
          <Route path="/donor_profile" element={<EditProfile />} />
          <Route path="/donor_profile/edit_donor_profile" element={<EditProfileBox />} />
          <Route path="/donation_info" element={<DonationInfo />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/payment_success" element={<PaymentSuccess />} />
          <Route path="/payment_fail" element={<PaymenntFail />} />
          <Route path="/appointment_success" element={<AppointmentSuccess />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/ngo_login" element={<NgoLogin />} />
          <Route path="/ngo_dashboard" element={<Dashboard />} />
          {/* Additional routes can go here */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
