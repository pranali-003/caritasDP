import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Img from "../assets/img1.jpg";

const NgoPage = () => {

  const requirementData = [
    {
      type: 'Clothing',
      icon: 'fas fa-tshirt',
      subtypes: ['Shirt', 'Pants', 'Jacket'],
      description: 'We are collecting new and gently used clothing for children and adults.'
    },
    {
      type: 'Groceries',
      icon: 'fas fa-shopping-cart',
      subtypes: ['Rice', 'Flour', 'Oil'],
      description: 'We are collecting essential groceries for the families in need.'
    },
    {
      type: 'Stationary',
      icon: 'fas fa-pencil-alt',
      subtypes: ['Pens', 'Notebooks', 'Markers'],
      description: 'We are collecting stationary items for children and students.'
    },
    {
      type: 'Monetary',
      icon: 'fas fa-rupee-sign',
      subtypes: ['Cash Donations', 'Fundraising'],
      description: 'We are collecting monetary donations to support our ongoing projects.'
    }
  ];
  
  const RequirementCard = ({ requirement, onClick }) => (
    <div
      className="col-6 col-md-3 text-center mb-4"
      style={requirementCardStyle}
      onMouseOver={(e) => e.currentTarget.style = { ...requirementCardStyle, ...requirementCardHover }}
      onMouseOut={(e) => e.currentTarget.style = requirementCardStyle}
    >
      <div>
        <i className={requirement.icon} style={iconStyle}></i><br />
        <strong>{requirement.type}</strong>
      </div>
      <button className="btn btn-primary mt-3" onClick={() => onClick(requirement)}>
        View
      </button>
    </div>
  );
  
  const RequirementModal = ({ requirement, showModal, setShowModal }) => (
    <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">{requirement.type} Details</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <h6>Description:</h6>
            <p>{requirement.description}</p>
            <h6>Subtypes:</h6>
            <ul>
              {requirement.subtypes.map((subtype, index) => (
                <li key={index}>{subtype}</li>
              ))}
            </ul>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  




  // Styles
  const sectionTitleStyle = {
    color: "#1270B0",
    marginTop: "30px",
    textAlign: "center",
  };

  const achievementCardStyle = {
    borderRadius: "15px", // More rounded corners
    background: "linear-gradient(to bottom right, #ffffff, #f7f7f7)", // Soft gradient background
    padding: "25px", // More padding for content spacing
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)", // Softer and larger shadow for depth
    marginBottom: "25px", // Increased margin for better spacing
    border: "1px solid #ddd", // Light border to define the card edges
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth hover effects
  };

  const achievementCardHoverStyle = {
    transform: "translateY(-5px)", // Lift the card slightly on hover
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)", // More prominent shadow on hover
  };

  // Use the `achievementCardHoverStyle` for hover effects via className or inline styles as appropriate.

  // const iconStyle = {
  //   width: "60px",
  //   height: "60px",
  //   marginBottom: "10px",
  // };
  const requirementCardStyle = {
    borderRadius: '10px',
    backgroundColor: '#E2E2E2',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    textAlign: 'center',
  };
  
  // Hover effect styling for the card
  const requirementCardHover = {
    transform: 'translateY(-10px)',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.3)',
  };
  
  // Icon Styling
  const iconStyle = {
    fontSize: '40px',
    color: '#1270B0', // Primary color
    marginBottom: '10px',
    transition: 'color 0.3s ease',
  };
  
  // Button Style
  const buttonStyle = {
    backgroundColor: '#1270B0',
    borderColor: '#1270B0',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '0.9rem',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    cursor: 'pointer',
  };
  
  // Hover effect for the button
  const buttonHoverStyle = {
    backgroundColor: '#FF7043', // Secondary color for hover
    borderColor: '#FF7043',
    transform: 'translateY(-2px)',
  };
  

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {/* NGO Details Section */}
          <div className="col-md-4">
            <div className="bg-light p-4 rounded mb-4">
              <img src={Img} alt="NGO" className="img-fluid rounded mb-3" />
              <h3 style={{ color: "#1270B0" }}>Bal Sadan</h3>
              <p>
                <strong>Location:</strong> Chennai, India
              </p>
              <p>
                <strong>Founded:</strong> 2010
              </p>
              <p>
                <strong>Focus Areas:</strong> Education, Health, Child Welfare
              </p>
              <p>
                <strong>Contact:</strong> +91 1234567890
              </p>
            </div>
          </div>

          {/* NGO Achievements Section */}
          <div className="col-md-8">
            <h3 className="text-center" style={sectionTitleStyle}>
              NGO Achievements
            </h3>
            <div className="row">
              {/* Achievement 1 */}
              <div className="col-md-6">
                <div style={achievementCardStyle}>
                  <img
                    src="path/to/icon1.png"
                    alt="Achievement 1"
                    style={iconStyle}
                  />
                  <h5>Educated 500+ Children</h5>
                  <p>
                    Provided free education to underprivileged children in rural
                    areas, improving their literacy and life opportunities.
                  </p>
                </div>
              </div>

              {/* Achievement 2 */}
              <div className="col-md-6">
                <div style={achievementCardStyle}>
                  <img
                    src="path/to/icon2.png"
                    alt="Achievement 2"
                    style={iconStyle}
                  />
                  <h5>Healthcare for 2000+ Individuals</h5>
                  <p>
                    Organized health camps and distributed medicines to families
                    in need, improving their quality of life.
                  </p>
                </div>
              </div>

              {/* Achievement 3 */}
              <div className="col-md-6">
                <div style={achievementCardStyle}>
                  <img
                    src="path/to/icon3.png"
                    alt="Achievement 3"
                    style={iconStyle}
                  />
                  <h5>COVID-19 Relief</h5>
                  <p>
                    Distributed 5000+ meals and provided support during the
                    pandemic to affected communities.
                  </p>
                </div>
              </div>

              {/* Achievement 4 */}
              <div className="col-md-6">
                <div style={achievementCardStyle}>
                  <img
                    src="path/to/icon4.png"
                    alt="Achievement 4"
                    style={iconStyle}
                  />
                  <h5>Women's Empowerment</h5>
                  <p>
                    Launched vocational training programs for women, helping
                    them become financially independent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* NGO Requirements Section */}
      <div className="bg-light p-4 rounded mb-4 shadow-sm">
        <h3 className="text-center" style={sectionTitleStyle}>
          NGO Requirements
        </h3>

        <div className="row justify-content-center">
          {/* Clothing Requirement */}
          <div className="col-6 col-md-3 text-center mb-4">
            <div
              className="requirement-card"
              style={requirementCardStyle}
              onMouseOver={(e) =>
                (e.currentTarget.style = {
                  ...requirementCardStyle,
                  ...requirementCardHover,
                })
              }
              onMouseOut={(e) => (e.currentTarget.style = requirementCardStyle)}
            >
              <i className="fas fa-tshirt" style={iconStyle}></i>
              <h5>Clothing</h5>
              <p>Warm clothes for children and adults in need.</p>
              <button className="btn btn-primary mt-3">View</button>
            </div>
          </div>

          {/* Groceries Requirement */}
          <div className="col-6 col-md-3 text-center mb-4">
            <div
              className="requirement-card"
              style={requirementCardStyle}
              onMouseOver={(e) =>
                (e.currentTarget.style = {
                  ...requirementCardStyle,
                  ...requirementCardHover,
                })
              }
              onMouseOut={(e) => (e.currentTarget.style = requirementCardStyle)}
            >
              <i className="fas fa-shopping-cart" style={iconStyle}></i>
              <h5>Groceries</h5>
              <p>Essential food items for underprivileged families.</p>
              <button className="btn btn-primary mt-3">View</button>
            </div>
          </div>

          {/* Stationary Requirement */}
          <div className="col-6 col-md-3 text-center mb-4">
            <div
              className="requirement-card"
              style={requirementCardStyle}
              onMouseOver={(e) =>
                (e.currentTarget.style = {
                  ...requirementCardStyle,
                  ...requirementCardHover,
                })
              }
              onMouseOut={(e) => (e.currentTarget.style = requirementCardStyle)}
            >
              <i className="fas fa-pencil-alt" style={iconStyle}></i>
              <h5>Stationary</h5>
              <p>Books, pens, and other materials for education.</p>
              <button className="btn btn-primary mt-3">View</button>
            </div>
          </div>

          {/* Monetary Requirement */}
          <div className="col-6 col-md-3 text-center mb-4">
            <div
              className="requirement-card"
              style={requirementCardStyle}
              onMouseOver={(e) =>
                (e.currentTarget.style = {
                  ...requirementCardStyle,
                  ...requirementCardHover,
                })
              }
              onMouseOut={(e) => (e.currentTarget.style = requirementCardStyle)}
            >
              <i className="fas fa-rupee-sign" style={iconStyle}></i>
              <h5>Monetary</h5>
              <p>Financial support to help with various needs.</p>
              <button className="btn btn-primary mt-3">View</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NgoPage;
