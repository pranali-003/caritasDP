import React, { useState } from 'react';
import { Form, Button, Col, Row, Card } from 'react-bootstrap';

const OnboardNGO = () => {
  const [basicInfo, setBasicInfo] = useState({
    unique_id: '',
    name: '',
    registration_number: '',
    contact_number: '',
    street: '',
    city: '',
    state: '',
    zip_code: '',
    country: '',
  });

  const [detailedInfo, setDetailedInfo] = useState({
    cause_aim: '',
    profile_photo: '',
    website: '',
    email: '',
    food: { required: false, quantity: 0, unit: '' },
    clothing: { required: false, quantity: 0, unit: '' },
    study_material: { required: false, quantity: 0, unit: '' },
    money: { required: false, amount: 0, currency: 'INR' },
    bank_name: '',
    account_number: '',
    ifsc_code: '',
  });

  const [isBasicInfoSubmitted, setIsBasicInfoSubmitted] = useState(false);

  const handleBasicInfoChange = (e) => {
    const { name, value } = e.target;
    setBasicInfo({ ...basicInfo, [name]: value });
  };

  const handleDetailedInfoChange = (e) => {
    const { name, value } = e.target;
    setDetailedInfo({ ...detailedInfo, [name]: value });
  };

  const handleBasicInfoSubmit = () => {
    setIsBasicInfoSubmitted(true);
  };

  const handleSubmit = () => {
    // Combine basic and detailed information for submission
    const ngoData = { ...basicInfo, ...detailedInfo };
    console.log('NGO Data Submitted:', ngoData);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">NGO Onboarding Form</h2>
      <Row>
        <Col md={6}>
          <Card className="mb-4 p-3">
            <h5>Basic Information</h5>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>NGO Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={basicInfo.name}
                  onChange={handleBasicInfoChange}
                  placeholder="Enter NGO name"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Registration Number</Form.Label>
                <Form.Control
                  type="text"
                  name="registration_number"
                  value={basicInfo.registration_number}
                  onChange={handleBasicInfoChange}
                  placeholder="Enter registration number"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="text"
                  name="contact_number"
                  value={basicInfo.contact_number}
                  onChange={handleBasicInfoChange}
                  placeholder="Enter contact number"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Street Address</Form.Label>
                <Form.Control
                  type="text"
                  name="street"
                  value={basicInfo.street}
                  onChange={handleBasicInfoChange}
                  placeholder="Enter street address"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={basicInfo.city}
                  onChange={handleBasicInfoChange}
                  placeholder="Enter city"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  name="state"
                  value={basicInfo.state}
                  onChange={handleBasicInfoChange}
                  placeholder="Enter state"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  type="text"
                  name="zip_code"
                  value={basicInfo.zip_code}
                  onChange={handleBasicInfoChange}
                  placeholder="Enter zip code"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  name="country"
                  value={basicInfo.country}
                  onChange={handleBasicInfoChange}
                  placeholder="Enter country"
                />
              </Form.Group>

              <Button
                variant="primary"
                onClick={handleBasicInfoSubmit}
                disabled={!basicInfo.name || !basicInfo.registration_number || !basicInfo.contact_number}
              >
                Submit Basic Info
              </Button>
            </Form>
          </Card>
        </Col>

        <Col md={6}>
          <Card className={`mb-4 p-3 ${!isBasicInfoSubmitted ? 'bg-light text-muted' : ''}`}>
            <h5>Detailed Information</h5>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Cause/Aim</Form.Label>
                <Form.Control
                  as="textarea"
                  name="cause_aim"
                  value={detailedInfo.cause_aim}
                  onChange={handleDetailedInfoChange}
                  placeholder="Describe the cause or aim of your NGO"
                  rows={3}
                  disabled={!isBasicInfoSubmitted}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Profile Photo URL</Form.Label>
                <Form.Control
                  type="text"
                  name="profile_photo"
                  value={detailedInfo.profile_photo}
                  onChange={handleDetailedInfoChange}
                  placeholder="Enter profile photo URL"
                  disabled={!isBasicInfoSubmitted}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Website URL</Form.Label>
                <Form.Control
                  type="text"
                  name="website"
                  value={detailedInfo.website}
                  onChange={handleDetailedInfoChange}
                  placeholder="Enter website URL"
                  disabled={!isBasicInfoSubmitted}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={detailedInfo.email}
                  onChange={handleDetailedInfoChange}
                  placeholder="Enter email"
                  disabled={!isBasicInfoSubmitted}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Bank Name</Form.Label>
                <Form.Control
                  type="text"
                  name="bank_name"
                  value={detailedInfo.bank_name}
                  onChange={handleDetailedInfoChange}
                  placeholder="Enter bank name"
                  disabled={!isBasicInfoSubmitted}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Account Number</Form.Label>
                <Form.Control
                  type="text"
                  name="account_number"
                  value={detailedInfo.account_number}
                  onChange={handleDetailedInfoChange}
                  placeholder="Enter account number"
                  disabled={!isBasicInfoSubmitted}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>IFSC Code</Form.Label>
                <Form.Control
                  type="text"
                  name="ifsc_code"
                  value={detailedInfo.ifsc_code}
                  onChange={handleDetailedInfoChange}
                  placeholder="Enter IFSC code"
                  disabled={!isBasicInfoSubmitted}
                />
              </Form.Group>

              <Button variant="primary" onClick={handleSubmit} disabled={!isBasicInfoSubmitted}>
                Save NGO Details
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default OnboardNGO;
