
import React, { useState,useEffect } from "react";
import Layout from "../../components/layout/Layout";
import image1 from "../../../assets/image2.jpeg";
import "./donation-info.css";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const DonationInfo = () => {

   
  useEffect(() => {
    const fetchUserDetails = async () => {
      const userId = localStorage.getItem("id"); // Retrieve logged-in user's ID from localStorage
      try {
        const response = await fetch("http://localhost:3000/api/donor/getDonorDetails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: userId }),
        });

        const data = await response.json();
        setUserDetails(data); // Update state with fetched user details
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);
  const recentDonors = [
    { name: "John Doe", amount: "$50", date: "2024-11-01" },
    { name: "Jane Smith", amount: "$30", date: "2024-11-02" },
    { name: "Michael Brown", amount: "$20", date: "2024-11-03" },
    { name: "Emily Davis", amount: "$100", date: "2024-11-04" },
  ];

  const otherRequirements = [
    {
      item: "Clothes",
      subcategories: [
        { name: "Shirts", totalQuantity: 50, fulfilledQuantity: 10 },
        { name: "Pants", totalQuantity: 30, fulfilledQuantity: 20 },
      ],
    },
    {
      item: "Grocery",
      subcategories: [
        { name: "Rice", totalQuantity: 20, fulfilledQuantity: 15 },
        { name: "Sugar", totalQuantity: 10, fulfilledQuantity: 8 },
      ],
    },
    {
      item: "Stationery",
      subcategories: [
        { name: "Notebooks", totalQuantity: 100, fulfilledQuantity: 90 },
        { name: "Pens", totalQuantity: 200, fulfilledQuantity: 150 },
      ],
    },
  ];

  const monetaryRequired = 4000;
  const monetaryRaised = 3000;

  // Helper to calculate percentage
  const calculatePercentage = (fulfilled, total) =>
    total > 0 ? (fulfilled / total) * 100 : 0;

  // Calculate category completion percentages
  const otherRequirementsWithCompletion = otherRequirements.map((category) => {
    const totalFulfilled = category.subcategories.reduce(
      (acc, sub) => acc + sub.fulfilledQuantity,
      0
    );
    const totalRequired = category.subcategories.reduce(
      (acc, sub) => acc + sub.totalQuantity,
      0
    );
    const completion = calculatePercentage(totalFulfilled, totalRequired);

    const subcategoriesWithCompletion = category.subcategories.map((sub) => ({
      ...sub,
      completion: calculatePercentage(sub.fulfilledQuantity, sub.totalQuantity),
    }));

    return {
      ...category,
      completion,
      subcategories: subcategoriesWithCompletion,
    };
  });

  // Calculate monetary completion
  const monetaryCompletion = calculatePercentage(
    monetaryRaised,
    monetaryRequired
  );

  // Calculate overall completion percentage (simple average)
  const overallCompletionPercentage = Math.round(
    (monetaryCompletion +
      otherRequirementsWithCompletion.reduce(
        (acc, req) => acc + req.completion,
        0
      ) /
        otherRequirements.length) /
      2
  );

  // Set cart as an array for storing selected donation items
  const [cart, setCart] = useState([]); // Initializing as an empty array
  const [userDetails, setUserDetails] = useState(null);

  const incrementItem = (category, subcategory, remainingQuantity) => {
    setCart((prevCart) => {
      if (!Array.isArray(prevCart)) return []; // Ensure prevCart is always an array

      const itemIndex = prevCart.findIndex(
        (item) => item.category === category && item.subcategory === subcategory
      );

      // If item already exists in the cart, increment the quantity
      if (itemIndex > -1) {
        const updatedCart = [...prevCart];
        const updatedItem = { ...updatedCart[itemIndex] };

        if (updatedItem.quantity < remainingQuantity) {
          updatedItem.quantity += 1;
          updatedCart[itemIndex] = updatedItem;
        }
        return updatedCart;
      } else {
        // Add new item to cart if it doesn't exist
        return [
          ...prevCart,
          { category, subcategory, quantity: 1 },
        ];
      }
    });
  };

  // Navigate to the appointment page with cart and NGO details
  const navigate = useNavigate();

  const ngoDetails = {
    name: "Lion's Bal Sadan",
    address: "Near GuruTeg Bahadur English School, new Usmanpura,Chh. Sambhajinagar-431007",
    contact: "+91 9028047619",
  };

  const proceedToDonate = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items to proceed.");
      return;
    }
    navigate("/appointment", {
      state: { cart, ngoDetails },
    });
  };

// Stripe Payment Section

// const makePayment = async()=>{
// const stripe = await loadStripe("pk_test_51QH3bhLvUVPhWhimJoIx6c3EyDjz9Z6NiyqUbrKNCcMKtJ6rebkV2d9ioHpSNwB9xI9ofX9OKFTcgtfrPySzjAgd00x2GEXQ1l");
// const body ={
//   money : monetaryRequired - monetaryRaised
// }
// const headers={
//   "Content-Type":"application/json"
// }
// const response = await fetch(`http://localhost:3000/create/checkout/session`, {
//   method: "POST",
//   headers: headers,
//   body: JSON.stringify(body),
// });

// const session = await response.json();
// const result =stripe.redirectToCheckout({
//   sessionId:session.id
// });
// if(result.error){
//   console.log(result.error);
// }

// }

// ######## working stripe

// const makePayment = async () => {
  

//   const stripe = await loadStripe("pk_test_51QH3bhLvUVPhWhimJoIx6c3EyDjz9Z6NiyqUbrKNCcMKtJ6rebkV2d9ioHpSNwB9xI9ofX9OKFTcgtfrPySzjAgd00x2GEXQ1l");
  

//   const ngoDetails = {
//     name: "Lion's Bal Sadan",
//     address: "Near GuruTeg Bahadur English School, new Usmanpura,Chh. Sambhajinagar-431007",
//     contact: "+91 9028047619",
//   };
//   const body = {
//     money: monetaryRequired - monetaryRaised,
//     user: {
//       id: userDetails._id,
//       username: userDetails.donor_username,
//       email: userDetails.donor_contact.email,
//     },
//     ngo: ngoDetails,
//   };

//   const headers = {
//     "Content-Type": "application/json"
//   };

//   try {
//     const response = await fetch(`http://localhost:3000/create/checkout/session`, {
//       method: "POST",
//       headers: headers,
//       body: JSON.stringify(body),
//     });

//     const session = await response.json();

//     // Redirect to Stripe Checkout
//     const result = await stripe.redirectToCheckout({
//       sessionId: session.id
//     });

//     if (result.error) {
//       console.log("Stripe Checkout Error:", result.error);
//     }
//   } catch (error) {
//     console.error("Error in makePayment:", error);
//   }
// };



// 3333 changed stripe 

const makePayment = async () => {
  const stripe = await loadStripe("pk_test_51QH3bhLvUVPhWhimJoIx6c3EyDjz9Z6NiyqUbrKNCcMKtJ6rebkV2d9ioHpSNwB9xI9ofX9OKFTcgtfrPySzjAgd00x2GEXQ1l");

  const ngoDetails = {
    name: "Lion's Bal Sadan",
    address: "Near GuruTeg Bahadur English School, new Usmanpura,Chh. Sambhajinagar-431007",
    contact: "+91 9028047619",
  };

  const donationAmount = parseFloat(prompt("Enter the amount you want to donate:")); // Allow user to input amount

  if (isNaN(donationAmount) || donationAmount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  const body = {
    money: donationAmount, // Send user-selected amount
    user: {
      id: userDetails._id,
      username: userDetails.donor_username,
      email: userDetails.donor_contact.email,
    },
    ngo: ngoDetails,
  };

  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(`http://localhost:3000/create/checkout/session`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });

    const session = await response.json();

    // Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log("Stripe Checkout Error:", result.error);
    }
  } catch (error) {
    console.error("Error in makePayment:", error);
  }
};



  return (
    <Layout>
      <div className="donation-info-container">
        {/* Top Section */}
        <div className="top">
          <div className="top-left">
            <img src={image1} alt="NGO" className="ngo-image" />
          </div>
          <div className="top-right">
             <h2>Lion's Bal Sadan</h2>
               <p className="description">Empowering lives through kindness.</p>

              <div className="info">
                <div className="info-item">
                  <strong>Address:</strong> Near GuruTeg Bahadur English School, new Usmanpura,Chh. Sambhajinagar-431007
                </div>
                <div className="info-item">
                  <strong>Contact:</strong> +91 9028047619 | drshaikhmurtuza@yahoo.com
                </div>
                <div className="info-item">
                  <strong>Objective:</strong> Our goal is to provide education, healthcare, and nourishment to underprivileged children.
                </div>
            <div className="info">
              <div className="info-item">
                <strong>Tax Benefit:</strong> Yes
              </div>
              <div className="info-item">
                <strong>Urgency:</strong> Medium
              </div>
              <div className="info-item">
                <strong>Category:</strong> Grocery
              </div>
            </div>
            <div className="progress-container">
              <div className="slider">
                <label htmlFor="progress">Overall Completion Level:</label>
                <input
                  type="range"
                  id="progress"
                  min="0"
                  max="100"
                  value={overallCompletionPercentage}
                  className="slider-input"
                  disabled
                />
                <div className="slider-value">
                  {overallCompletionPercentage}% Complete
                </div>
              </div>
            </div>
            <p className="stats">
              <span>Urgency: Medium</span> | <span>Days Left: 15</span> | <span>Donor Count: 1</span>
            </p>
          </div>
        </div>
        </div>

        {/* Requirements Section */}
        <div className="requirements-section">
      <h3 className="section-title">Requirements</h3>
      <div className="requirements-cards">
        {/* Monetary Requirement */}
        <div className="requirement-card monetary">
          <h4 className="card-title">Monetary</h4>
          <p className="requirement-details">
            <strong>Total Required:</strong> ${monetaryRequired}
          </p>
          <p className="requirement-details">
            <strong>Raised:</strong> ${monetaryRaised}
          </p>
          <p className="requirement-details">
            <strong>Remaining:</strong> ${monetaryRequired - monetaryRaised}
          </p>
          <p className="requirement-details">
            <strong>Completion:</strong> {monetaryCompletion.toFixed(2)}%
          </p>
          <button onClick={makePayment} className="donate-button">Donate Money</button>
        </div>

        {/* Other Items */}
        {otherRequirementsWithCompletion.map((req, index) => (
          <div key={index} className="requirement-card">
            <h4 className="card-title">{req.item}</h4>
            <p className="requirement-details">
              <strong>Completion:</strong> {req.completion.toFixed(2)}%
            </p>
            <div className="subcategories">
              {req.subcategories.map((sub, subIndex) => {
                const remainingQuantity = sub.totalQuantity - sub.fulfilledQuantity;
                const cartQuantity = cart.find(
                  (item) => item.category === req.item && item.subcategory === sub.name
                )?.quantity || 0;

                return (
                  <div key={subIndex} className="subcategory">
                    <p className="subcategory-title">
                      <strong>{sub.name}:</strong>
                    </p>
                    <p className="subcategory-details">
                      Total: {sub.totalQuantity}, Fulfilled: {sub.fulfilledQuantity}
                    </p>
                    <p className="subcategory-details">Remaining: {remainingQuantity}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>

        <div className="donation-info-container">
          {/* Donate Section */}
         <div className="donate-section">
            <h3>Donate Items</h3>
            <div className="donate-items">
              {otherRequirements.map((req, index) => (
                <div key={index} className="donate-category">
                  <h4>{req.item}</h4>
                  <div className="donate-subcategories">
                    {req.subcategories.map((sub, subIndex) => {
                      const remainingQuantity =
                        sub.totalQuantity - sub.fulfilledQuantity;
                      const cartKey = `${req.item}-${sub.name}`;
                      const cartQuantity = cart[cartKey] || 0;

                      return (
                        <div key={subIndex} className="donate-subcategory">
                          <p>
                            <strong>{sub.name}:</strong>
                          </p>
                          <p>
                            Total: {sub.totalQuantity}, Fulfilled:{" "}
                            {sub.fulfilledQuantity}
                          </p>
                          <p>Remaining: {remainingQuantity}</p>
                          <p>Added to Donate: {cartQuantity}</p>
                          <button
                            onClick={() =>
                              incrementItem(
                                req.item,
                                sub.name,
                                remainingQuantity
                              )
                            }
                            disabled={cartQuantity >= remainingQuantity}
                          >
                            {cartQuantity >= remainingQuantity
                              ? "Max Reached"
                              : "Add More"}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>

        {/* Donation Cart */}
        <div className="donation-cart">
          <h3>Your Donation Cart</h3>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.subcategory} - {item.quantity} items
              </li>
            ))}
          </ul>
        </div>

        {/* Proceed to Donate Button */}
        <div className="proceed-btn-container">
          <button className="proceed-btn" onClick={proceedToDonate}>
            Proceed to Donate
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default DonationInfo;
