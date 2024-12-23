import React, { useState } from "react";
import './ngoLogin.css'
import {useNavigate} from "react-router-dom"
const LoginForm = () => {
const navigate= useNavigate();
    const handleSubmit=()=>{
        alert("login successfull");
        navigate('/ngo_dashboard')
    }
  return (
    <div className="login-form-container">
      <h1>Login to Your Account</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            // value={formData.email}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            // value={formData.password}
            // onChange={handleChange}
            required
          />
        </div>
        {/* {error && <p className="error-message">{error}</p>}
       disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"} */}
           <button type="submit" >Log In 
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
