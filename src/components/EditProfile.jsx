import React, { useState } from 'react';
import Select from 'react-select';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    ngoName: '',
    email: '',
    contact: '',
    address: '',
    website: '',
    mission: '',
    registrationNumber: '',
    ngoType: [],
    intakeCapacity: '',
    createdOn: '',
    updatedOn: '',
    profileImage: null,
  });

  const ngoOptions = [
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profileImage: URL.createObjectURL(file) });
  };

  const handleNGOTypeChange = (selectedOptions) => {
    setFormData({ ...formData, ngoType: selectedOptions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="container mt-4" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group mb-3 text-center">
            <label htmlFor="profileImage" className="d-block">
              <img
                src={formData.profileImage || 'https://via.placeholder.com/150'}
                alt="Profile"
                className="rounded-circle"
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'cover',
                  backgroundColor: formData.profileImage ? 'transparent' : '#d3d3d3',
                }}
              />
            </label>
            <input
              type="file"
              id="profileImage"
              className="form-control-file d-none"
              accept="image/*"
              onChange={handleImageChange}
            />
            <button
              type="button"
              className="btn btn-secondary mt-2"
              onClick={() => document.getElementById('profileImage').click()}
            >
              Change Image
            </button>
          </div>
          <div className="form-group mb-3">
            <label>NGO Name</label>
            <input
              type="text"
              className="form-control"
              name="ngoName"
              value={formData.ngoName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label>Contact</label>
            <input
              type="text"
              className="form-control"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label>Address</label>
            <textarea
              className="form-control"
              name="address"
              value={formData.address}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group mb-3">
            <label>Website</label>
            <input
              type="text"
              className="form-control"
              name="website"
              value={formData.website}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group mb-3">
            <label>Mission</label>
            <textarea
              className="form-control"
              name="mission"
              value={formData.mission}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group mb-3">
            <label>Registration Number</label>
            <input
              type="text"
              className="form-control"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label>NGO Type</label>
            <Select
              isMulti
              name="ngoType"
              options={ngoOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              value={formData.ngoType}
              onChange={handleNGOTypeChange}
            />
          </div>
          <div className="form-group mb-3">
            <label>Intake Capacity</label>
            <input
              type="number"
              className="form-control"
              name="intakeCapacity"
              value={formData.intakeCapacity}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label>Created On</label>
            <input
              type="date"
              className="form-control"
              name="createdOn"
              value={formData.createdOn}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label>Updated On</label>
            <input
              type="date"
              className="form-control"
              name="updatedOn"
              value={formData.updatedOn}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      {/* <button type="submit" className="btn btn-primary">
        Save
      </button>
      <button type="button" className="btn btn-secondary ms-2">
        Cancel
      </button> */}
    </form>
  );
};

export default EditProfile;
