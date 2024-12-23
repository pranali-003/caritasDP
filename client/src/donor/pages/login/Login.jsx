import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './login.css'; // Import your CSS file
import { toast } from 'react-toastify';

const Login = () => {
  let navigate = useNavigate();
  const [donor, setDonor] = useState({
    donor_username: '',
    donor_password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonor((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e)=>{
    try{
      e.preventDefault();
    console.log(donor);
  
    let response = await fetch(`http://localhost:3000/api/donor/login`,{
      mode :"cors",
      method :"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body : JSON.stringify(donor)
  
    });
    let data =await response.json();
    console.log(data);
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }
  
    console.log('User Logged In:', data);
    toast.success('Login  Successful!', { position: "top-center" });
    console.log(data.donor);
    localStorage.setItem("id", data.donor.id);
    navigate('/donor_home');
    }
  
    catch(error){
      console.log('error loggin in ', error);
      toast.error('Login Failed! ' + "Invalid Credentials", { position: "top-center" });
    }
}

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        Username:
        <input
          type="text"
          name="donor_username"
          value={donor.username}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="donor_password"
          value={donor.password}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
