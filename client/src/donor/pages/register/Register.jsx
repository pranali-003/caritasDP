import React, { useState } from 'react';
import './Register.css';
import {useNavigate} from 'react-router-dom' 
import { toast } from 'react-toastify';

const Register = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    donor_name: '',
    donor_gender: '',
    donor_age: '',
    donor_contact: {
      email: '',
      contact_no: '',
    },
    donor_address: {
      street: '',
      city: '',
      state: '',
      zip_code: '',
      country: '',
    },
    account_details: {
      bank_name: '',
      account_number: '',
      ifsc_code: '',
      pan_card: '',
    },
    donor_username: '',
    donor_password: '',
    donor_confirm_password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setFormData((prevData) => {
      if (name.includes('.')) {
        const [parent, child] = name.split('.');
        return {
          ...prevData,
          [parent]: {
            ...prevData[parent],
            [child]: value,
          },
        };
      }
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  

  const handleSubmit = async (e) => {
     // prevent deafult nature of form in react
  e.preventDefault();
  try{
    const response = await fetch("http://localhost:3000/api/donor/register", {
      mode:"cors",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    console.log('User registered:', data);
    toast.success('Registration Successful!', { position: "top-center" });
    navigate("/donor_login");

  }catch(error){
    console.log('register error', error);
    toast.error('Registration Failed: ' + 'Please Try Again' || error, { position: "top-center" });
  }

 
}


  return (
    <form className="donor-registration-form" onSubmit={handleSubmit}>
      <h2>Donor Registration</h2>
      <label>
        Name:
        <input
          type="text"
          name="donor_name"
          value={formData.donor_name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Gender:
        <select
          name="donor_gender"
          value={formData.donor_gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label>
        Age:
        <input
          type="text"
          name="donor_age"
          value={formData.donor_age}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="donor_contact.email"
          value={formData.donor_contact.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Contact No:
        <input
          type="text"
          name="donor_contact.contact_no"
          value={formData.donor_contact.contact_no}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Street:
        <input
          type="text"
          name="donor_address.street"
          value={formData.donor_address.street}
          onChange={handleChange}
        />
      </label>
      <label>
        City:
        <input
          type="text"
          name="donor_address.city"
          value={formData.donor_address.city}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        State:
        <input
          type="text"
          name="donor_address.state"
          value={formData.donor_address.state}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Zip Code:
        <input
          type="text"
          name="donor_address.zip_code"
          value={formData.donor_address.zip_code}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Country:
        <input
          type="text"
          name="donor_address.country"
          value={formData.donor_address.country}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Bank Name:
        <input
          type="text"
          name="account_details.bank_name"
          value={formData.account_details.bank_name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Account Number:
        <input
          type="text"
          name="account_details.account_number"
          value={formData.account_details.account_number}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        IFSC Code:
        <input
          type="text"
          name="account_details.ifsc_code"
          value={formData.account_details.ifsc_code}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        PAN Card:
        <input
          type="text"
          name="account_details.pan_card"
          value={formData.account_details.pan_card}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Username:
        <input
          type="text"
          name="donor_username"
          value={formData.donor_username}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="donor_password"
          value={formData.donor_password}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          name="donor_confirm_password"
          value={formData.donor_confirm_password}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
