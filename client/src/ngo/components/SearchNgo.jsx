import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Img1 from '../assets/img1.jpg';
import Img2 from '../assets/img2.jpg';
import Img3 from '../assets/img3.jpg';
import NgoInfo from '../pages/NgoInfo';
import boy from '../assets/boy.png';
import gamer from '../assets/gamer.png';
import hacker from '../assets/hacker.png';
import man from '../assets/man.png';
import woman from '../assets/woman.png';



const NGOCard = ({ imgSrc, name, description, location }) => (
  <div className="card shadow-lg mb-4" style={{ borderRadius: '10px' }}>
    <img src={imgSrc} className="card-img-top" alt={name} style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px', height: '200px', objectFit: 'cover' }} />
    <div className="card-body">
      <h5 className="card-title" style={{ color: '#1270b0', fontWeight: 'bold' }}>{name}</h5>
      <p className="card-text" style={{ color: '#6c757d' }}>{description}</p>
      <p className="text-muted">City: {location}</p>
      <div className="d-flex justify-content-around mt-3">
        <button className="btn btn-outline-primary" onClick={<NgoInfo />}>View</button>
        <button className="btn btn-success">Donate</button>
      </div>
    </div>
  </div>
);


const topDonors = [
  {
    imgSrc:'../assets/boy.png',
    name: 'Mr.Jain Parikh',
    donationAmount: '$500'
  },
  {
    imgSrc: {man},
    name: 'Jane Smith',
    donationAmount: '$300'
  },
  {
    imgSrc: {woman},
    name: 'Michael Lee',
    donationAmount: '$200'
  }
];


const Dashboard = () => {
  const ngoData = [
    { imgSrc: Img1, name: 'Bal Sadan', description: 'Working for betterment of society and welfare of children.', location: 'Sambhajinagar' },
    { imgSrc: Img3, name: 'Vidya Kendra', description: 'Aimed at providing education to underprivileged children.', location: 'Sambhajinagar' },
    { imgSrc: Img1, name: 'Bal Vikas Sadan', description: 'Helping children with developmental disabilities.', location: 'Sambhajinagar' },
    { imgSrc: Img3, name: 'Jan Kalyan Ashram', description: 'Working for betterment of children and women.', location: 'Sambhajinagar' },
    // More NGO entries...
  ];

  return (
    <div className="container" style={{ marginTop: '20px' }}>
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 style={{ color: '#1270b0', fontWeight: '' }}>Discover NGOs</h1>
        <button className="btn btn-outline-primary">Search NGOs</button>
      </div>

      {/* NGO Cards Section */}
      <div className="row">
        {ngoData.map((ngo, index) => (
          <div className="col-md-3" key={index}>
            <NGOCard 
              imgSrc={ngo.imgSrc}
              name={ngo.name}
              description={ngo.description}
              location={ngo.location}
            />
          </div>
        ))}
      </div>

      {/* Additional Info Section */}
      <div className="row mt-5">
  {/* Top Donors Section */}
  <div className="col-md-6">
    <div className="card shadow-lg" style={{ borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
      <h5 className="card-title" style={{ marginBottom: '30px' }}>Top Donors</h5>
      
      {/* Donor List */}
      {topDonors.map((donor, index) => (
        <div key={index} className="d-flex align-items-center mb-4" style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: '10px' }}>
          <img 
            src={donor.imgSrc} 
            alt={donor.name} 
            className="rounded-circle me-3" 
            style={{ width: '60px', height: '60px', objectFit: 'cover' }} 
          />
          <div className="text-start">
            <h6 style={{ margin: 0 }}>{donor.name}</h6>
            <p className="text-muted" style={{ margin: 0 }}>Donated: {donor.donationAmount}</p>
          </div>
        </div>
      ))}
      
      <button className="btn btn-primary mt-3">View All</button>
    </div>
  </div>
    

        {/* Community Forum Section */}
        <div className="col-md-6">
          <div className="card shadow-lg" style={{ borderRadius: '10px', padding: '20px' }}>
            <div className="card-body">
              <h5 className="card-title" style={{ color: '#1270b0', fontWeight: 'bold' }}>Community Forum</h5>
              <p className="card-text" style={{ color: '#6c757d' }}>
                Join the conversation and connect with fellow donors and NGOs to make a difference.
              </p>
              <button className="btn btn-outline-primary">Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
