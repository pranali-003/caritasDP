// community forums - shreya
import React from "react";

const CommunityForum = () => {
  const containerStyle = {
    margin: "0",
    padding: "0",
    height: "255px", // Ensures the container adapts to its parent height
    backgroundColor: "#f7f7f7",
    fontFamily: "Arial, sans-serif",
    overflow: "auto", // Allows scrolling if needed
    // border: '2px solid red',
    borderradius:'15px',
  };

  const headerStyle = {
    backgroundColor: "#f7f7f7",
    padding: "10px", // Reduced padding
    textAlign: "center",
    fontSize: "16px", // Reduced font size
  };

  const sectionStyle = {
    margin: "10px", // Reduced margin
    padding: "10px", // Reduced padding
    backgroundColor: "#e6e6e6",
    borderRadius: "5px", // Smaller border radius
  };

  const headingStyle = {
    color: "#005fa3",
    borderBottom: "1px solid #333", // Thinner border
    paddingBottom: "5px", // Smaller padding
    fontSize: "14px", // Reduced font size
  };

  const paragraphStyle = {
    color: "#e57dfd",
    lineHeight: "1.2", // Reduced line height
    fontWeight: "bold",
    fontSize: "12px", // Reduced font size
  };

  const imagePlaceholderStyle = {
    width: "100%",
    height: "45px", // Reduced height of image placeholder
    backgroundColor: "#ffffff",
    borderRadius: "5px",
    margin: "10px 0", // Reduced margin
  };

  return (
    <div className="community-forum" style={{ height: "230px", backgroundColor: "rgba(226, 226, 226, 1)",borderRadius:'5px' }}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h4 style={{color:'#005fa3'}}>Community Forums:</h4>
          <p style={{color:'#e57dfd'}}>forum/balsadan</p>
          <hr />
          <div style={sectionStyle}>
            <h2 style={headingStyle}>users/[username]</h2>
            <p style={paragraphStyle}>[Topic]</p>
            <div style={imagePlaceholderStyle}></div>
          </div>
          <div style={sectionStyle}>
            <h2 style={headingStyle}>users/[username]</h2>
            <p style={paragraphStyle}>[Topic]</p>
            <div style={imagePlaceholderStyle}></div>
          </div>
          <div style={sectionStyle}>
            <h2 style={headingStyle}>users/[username]</h2>
            <p style={paragraphStyle}>[Topic]</p>
            <div style={imagePlaceholderStyle}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityForum;