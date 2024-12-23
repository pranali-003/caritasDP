// import React, { useState } from "react";
// import "./hero.css";
// import Card from "../card/Card";
// import data from "./data.json";

// const Hero = () => {
//   const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category

//   // Function to filter NGOs based on selected category
//   const filterNGOsByCategory = (category) => {
//     return category
//       ? data.filter((ngo) => ngo.requiredDonations.includes(category))
//       : data;
//   };

//   // Handle dropdown change
//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   // Get filtered NGOs
//   const filteredNGOs = filterNGOsByCategory(selectedCategory);

//   return (
//     <div className="hero-section">
//       <div className="hero-text">
//         <h1 className="hero-heading">"Small Gifts, Big Impacts!"</h1>
//         <p>
//           Your contribution, no matter how small, can create a ripple effect of
//           positive change in the lives of those in need. Every donation helps us
//           support various initiatives aimed at uplifting communities and
//           providing essential resources.
//         </p>
//       </div>

//       <div className="money-donation-heading">
//         <h3>Here are some NGOs that require Monetary Funds</h3>
//       </div>
//       <div className="money-donation">
//         {data.map((ngo) => (
//           <Card
//             key={ngo.id}
//             image={ngo.image}
//             title={ngo.ngoName}
//             subtitle={ngo.description}
//             additionalInfo={ngo.additionalInfo}
//           />
//         ))}
//       </div>

//       <div className="item-donation-heading">
//         <h3>Here are some NGOs that require Other Donations</h3>
//         <select
//           className="item-category"
//           name="item-category"
//           value={selectedCategory}
//           onChange={handleCategoryChange}
//         >
//           <option value="">Select a category</option>
//           <option value="food">Food</option>
//           <option value="clothes">Clothes</option>
//           <option value="medicines">Medicines</option>
//           <option value="stationary">Stationery</option>
//         </select>
//       </div>

//       {/* Filtered NGOs */}
//       <h3>Filtered NGOs</h3>
//       <div className="item-donation">
//         {filteredNGOs.map((ngo) => (
//           <Card
//             key={ngo.id}
//             image={ngo.image}
//             title={ngo.ngoName}
//             subtitle={ngo.description}
//             additionalInfo={ngo.additionalInfo}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useState } from "react";
import "./hero.css";
import Card from "../card/Card";
import data from "./data.json";

const Hero = () => {
  const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category

  // Function to filter NGOs based on selected category
  const filterNGOsByCategory = (category) => {
    return category
      ? data.filter((ngo) => ngo.requiredDonations.includes(category))
      : data;
  };

  // Handle dropdown change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Get filtered NGOs
  const filteredNGOs = filterNGOsByCategory(selectedCategory);

  return (
    <div className="hero-section">
      {/* Hero Section */}
      <div className="hero-text">
        <h1 className="hero-heading">"Small Gifts, Big Impacts!"</h1>
        <p>
          Your contribution, no matter how small, can create a ripple effect of
          positive change in the lives of those in need.
        </p>
        <button className="cta-button">Donate Now</button>
      </div>

      {/* Monetary Donations Section */}
      <section className="donation-section">
        <h2 className="donation-heading">Monetary Donations</h2>
        <div className="donation-grid" id="find-ngo">
          {data.map((ngo) => (
            <Card
              key={ngo.id}
              image={ngo.image}
              title={ngo.ngoName}
              subtitle={ngo.description}
              additionalInfo={ngo.additionalInfo}
            />
          ))}
        </div>
      </section>

      {/* Item Donations Section */}
      <section className="donation-section">
        <h2 className="donation-heading">Item Donations</h2>
        <div className="filter-container" id="donate">
          <select
            className="item-category"
            name="item-category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Select a category</option>
            <option value="food">Food</option>
            <option value="clothes">Clothes</option>
            <option value="medicines">Medicines</option>
            <option value="stationary">Stationery</option>
          </select>
        </div>
        <div className="donation-grid">
          {filteredNGOs.map((ngo) => (
            <Card
              key={ngo.id}
              image={ngo.image}
              title={ngo.ngoName}
              subtitle={ngo.description}
              additionalInfo={ngo.additionalInfo}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
