import React, { useState } from "react";

const RegistrationForm = () => {
  const [step, setStep] = useState(1); // Step tracker
  const [formData, setFormData] = useState({
    // Initial state for all fields
    name: "",
    registration_number: "",
    objective: "",
    profile_photo: null,
    contactInfo: {
      email: "",
      phone: "",
      website: "",
    },
    address: {
      street: "",
      city: "",
      state: "",
      zip_code: "",
      country: "",
    },
    requirements: {
      food: { required: false, total_quantity: "", unit: "", subcategories: [] },
      clothing: { required: false, quantity: "", unit: "", subcategories: [] },
      study_material: { required: false, quantity: "", unit: "", subcategories: [] },
      money: { required: false, amount: "", currency: "" },
    },
    accountDetails: {
      bankName: "",
      accountNumber: "",
    },
  });

  // Handle form input changes
  const handleChange = (e, field, subField) => {
    if (subField) {
      setFormData({
        ...formData,
        [field]: { ...formData[field], [subField]: e.target.value },
      });
    } else {
      setFormData({ ...formData, [field]: e.target.value });
    }
  };

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleSubmit = () => {
    console.log("Form Data Submitted:", formData);
    // Add logic to submit formData to the server
  };

  return (
    <div>
      <h1>NGO Registration Form</h1>
      {step === 1 && (
        <div>
          <h2>Step 1: NGO Basic Information</h2>
          <input
            type="text"
            placeholder="NGO Name"
            value={formData.name}
            onChange={(e) => handleChange(e, "name")}
          />
          <input
            type="text"
            placeholder="Registration Number"
            value={formData.registration_number}
            onChange={(e) => handleChange(e, "registration_number")}
          />
          <textarea
            placeholder="Objective"
            value={formData.objective}
            onChange={(e) => handleChange(e, "objective")}
          />
          <input
            type="file"
            onChange={(e) =>
              setFormData({ ...formData, profile_photo: e.target.files[0] })
            }
          />
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Step 2: Contact Information</h2>
          <input
            type="email"
            placeholder="Email"
            value={formData.contactInfo.email}
            onChange={(e) => handleChange(e, "contactInfo", "email")}
          />
          <input
            type="tel"
            placeholder="Phone"
            value={formData.contactInfo.phone}
            onChange={(e) => handleChange(e, "contactInfo", "phone")}
          />
          <input
            type="url"
            placeholder="Website"
            value={formData.contactInfo.website}
            onChange={(e) => handleChange(e, "contactInfo", "website")}
          />
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Step 3: Address Information</h2>
          <input
            type="text"
            placeholder="Street"
            value={formData.address.street}
            onChange={(e) => handleChange(e, "address", "street")}
          />
          <input
            type="text"
            placeholder="City"
            value={formData.address.city}
            onChange={(e) => handleChange(e, "address", "city")}
          />
          <input
            type="text"
            placeholder="State"
            value={formData.address.state}
            onChange={(e) => handleChange(e, "address", "state")}
          />
          <input
            type="text"
            placeholder="Zip Code"
            value={formData.address.zip_code}
            onChange={(e) => handleChange(e, "address", "zip_code")}
          />
          <input
            type="text"
            placeholder="Country"
            value={formData.address.country}
            onChange={(e) => handleChange(e, "address", "country")}
          />
        </div>
      )}

      {step === 4 && (
        <div>
          <h2>Step 4: Requirements</h2>
          <label>
            <input
              type="checkbox"
              checked={formData.requirements.food.required}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  requirements: {
                    ...formData.requirements,
                    food: { ...formData.requirements.food, required: e.target.checked },
                  },
                })
              }
            />
            Food Required
          </label>
          {formData.requirements.food.required && (
            <div>
              <input
                type="number"
                placeholder="Total Quantity"
                value={formData.requirements.food.total_quantity}
                onChange={(e) =>
                  handleChange(e, "requirements", "food.total_quantity")
                }
              />
              <input
                type="text"
                placeholder="Unit (e.g., kg)"
                value={formData.requirements.food.unit}
                onChange={(e) => handleChange(e, "requirements", "food.unit")}
              />
            </div>
          )}
          {/* Add similar sections for clothing, study_material, and money */}
        </div>
      )}

      {step === 5 && (
        <div>
          <h2>Step 5: Account Details</h2>
          <input
            type="text"
            placeholder="Bank Name"
            value={formData.accountDetails.bankName}
            onChange={(e) => handleChange(e, "accountDetails", "bankName")}
          />
          <input
            type="text"
            placeholder="Account Number"
            value={formData.accountDetails.accountNumber}
            onChange={(e) => handleChange(e, "accountDetails", "accountNumber")}
          />
        </div>
      )}

      <div>
        {step > 1 && <button onClick={handlePrev}>Previous</button>}
        {step < 5 ? (
          <button onClick={handleNext}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
