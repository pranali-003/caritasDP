import React, { useState, useEffect } from 'react';
import './editprofilebox.css';
import { CgProfile } from "react-icons/cg";

const EditProfile = () => {
  // Step 1: Initialize state for form data
  const [formData, setFormData] = useState({
    email: '',
    contact_no: '',
    street: '',
    city: '',
    state: '',
    zip_code: '',
    country: '',
    bank_name: '',
    account_number: '',
    ifsc_code: '',
   
  });

  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error handling

  // Step 2: Fetch user details when component mounts
  useEffect(() => {
    const userId = localStorage.getItem("id"); // Get user ID from localStorage
    if (!userId) {
      setError("User not logged in.");
      setLoading(false);
      return;
    }

    fetch("http://localhost:3000/api/donor/getDonorDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: userId }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success === false) {
          setError("User not found.");
        } else {
          setFormData({
            
            email: data.donor_contact.email,
            contact_no: data.donor_contact.contact_no,
            street: data.donor_address.street,
            city: data.donor_address.city,
            state: data.donor_address.state,
            zip_code: data.donor_address.zip_code,
            country: data.donor_address.country,
            bank_name: data.account_details.bank_name,
            account_number: data.account_details.account_number,
            ifsc_code: data.account_details.ifsc_code,
           
          });
        }
        setLoading(false);
      })
      .catch(error => {
        setError("Error fetching user details.");
        setLoading(false);
      });
  }, []);

  // Step 3: Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Step 4: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = localStorage.getItem("id"); // Get user ID from localStorage
    if (!userId) {
      setError("User not logged in.");
      return;
    }

    fetch("http://localhost:3000/api/donor/updateDonorDetails", {
      method: "PUT", // Use PUT to update existing data
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: userId, ...formData }), // Send the updated data
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          alert("Profile updated successfully!");
        } else {
          alert("Failed to update profile: " + data.msg);
        }
      })
      .catch(error => {
        alert("Error updating profile: " + error.message);
      });
  };

  // Step 5: Render component
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="edit-container">
      <div className="edit-top">
        <img src="" alt="" />
        <CgProfile size={75} />
        <button>Upload</button>
      </div>
      <div className="edit-bottom">
        <form onSubmit={handleSubmit}>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="contact_no">Contact Number:</label>
            <input
              type="text"
              id="contact_no"
              name="contact_no"
              value={formData.contact_no}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="street">Street:</label>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.street}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="state">State:</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="zip_code">Zip Code:</label>
            <input
              type="text"
              id="zip_code"
              name="zip_code"
              value={formData.zip_code}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="bank_name">Bank Name:</label>
            <input
              type="text"
              id="bank_name"
              name="bank_name"
              value={formData.bank_name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="account_number">Account Number:</label>
            <input
              type="text"
              id="account_number"
              name="account_number"
              value={formData.account_number}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="ifsc_code">IFSC Code:</label>
            <input
              type="text"
              id="ifsc_code"
              name="ifsc_code"
              value={formData.ifsc_code}
              onChange={handleChange}
              required
            />
          </div>

         

          <div>
            <label htmlFor="donor_username">Username:</label>
            <input
              type="text"
              id="donor_username"
              name="donor_username"
              value={formData.donor_username}
              onChange={handleChange}
              required
            />
          </div>

        
          

          <div className="submit-button">
            <button type="submit">Update Profile</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
