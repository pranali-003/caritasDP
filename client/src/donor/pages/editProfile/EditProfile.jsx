import React,{useState,useEffect}from "react";
import Navbar from "../../components/navbar/Navbar";
import "./editProfile.css";
import image1 from '../../../assets/image2.jpeg'
import { FaHandHoldingHeart } from "react-icons/fa";
import { RiCommunityFill } from "react-icons/ri";
import {Link} from "react-router-dom"
import Layout from '../../components/layout/Layout'

const EditProfile = () => {

  const [userDetails,setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  
  const getUserDetails = async () => {
    try {
      const userId = localStorage.getItem("id");  // Retrieve the user ID from localStorage
      if (!userId) {
        setError("User not logged in");
        setLoading(false);
        return;
      }

      const response = await fetch("http://localhost:3000/api/donor/getDonorDetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",  // Correct content-type header
        },
        body: JSON.stringify({ id: userId }),  // Pass the user ID to fetch the details
      });

      const data = await response.json();

      if (response.ok) {
        setUserDetails(data);  // Update state with user details
        setLoading(false);
        console.log(data);
      } else {
        setError(data.msg);  // Handle any error message returned
        setLoading(false);
        console.log(data);
      }
    } catch (error) {
      console.error("Error fetching user details:", error);  // Log error if fetching fails
      setError("Error fetching user details");
      setLoading(false);
    }
  };


  
  useEffect(()=>{
    getUserDetails();
    // getNotes();
  },[]);
  return (
    <Layout>
      {/* <Navbar /> */}
      <div className="profile-section">
      <h2 className="profile-heading">My Profile</h2>
        <div className="my-profile">
          <div className="profile-left">
            <div>
            <img src={image1} className="ngo-image"alt="not found " />
            </div>
            <div className="profile-info">
            <p>{userDetails ? userDetails.donor_name : "user"}</p>
            <p>{userDetails ? userDetails.donor_contact.email : "user email"}</p>
            <p>{userDetails ? userDetails.donor_contact.contact_no: ""}</p>
            <button className="edit-btn" ><Link to="edit_donor_profile">Edit</Link></button>
            </div>
           
          </div>
          <div className="profile-right">
            <div className="donations">
            <FaHandHoldingHeart size={55} />
              <p>$200</p>
              <p>Total Donations</p>

            </div>
            <div className="campaigns">
            <RiCommunityFill size={55}  />
          <p>20</p>
          <p>Total Campaigns</p>
            </div>
          </div>
        </div>
        <h2 className="history-heading">Donation History</h2>
        <div className="donation-history">
          
          <div className="donation-info">
            <p>NGO Name</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae sequi alias sint exercitationem, iure nesciunt!</p>
            <p>23/09/2024</p>
            <button>View</button>
          </div>
          <div className="donation-info">
            <p>NGO Name</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, voluptatibus.</p>
            <p>23/09/2024</p>
            <button>View</button>
          </div>
          <div className="donation-info">
            <p>NGO Name</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, voluptatibus.</p>
            <p>23/09/2024</p>
            <button>View</button>
          </div>
          <div className="donation-info">
            <p>NGO Name</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, voluptatibus.</p>
            <p>23/09/2024</p>
            <button>View</button>
          </div>
          <div className="donation-info">
            <p>NGO Name</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, voluptatibus.</p>
            <p>23/09/2024</p>
            <button>View</button>
          </div>
        </div>
      </div>
      
    </Layout>
  );
};

export default EditProfile;
