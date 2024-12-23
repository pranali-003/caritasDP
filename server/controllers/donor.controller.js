const DonorInfo = require('../models/donor.info');

const getDonors = async (req,res)=>{
    try{
        const donor =  await DonorInfo.find({});
        res.status(200).json(donor);

    }catch(error){
        res.status(500).json({message: error.message})
    }
}
// get donor by id

const getDonorById = async(req,res)=>{
    try{
        // fetch id from parameters 
        const {id} = req.body;
        const donor = await DonorInfo.findById(id);
        if(!donor){
           return  res.status(404).json({message: 'Donor not found.'});
        }
        res.json(donor);
    }catch(error){
        res.status(500).json({message: error.message})

    }
}

const getDonorDetails = async (req, res) => {
  let { id } = req.body;  // Extracting the donor ID from the request body
  try {
    let user = await DonorInfo.findOne({ _id: id });  // Searching for the donor by ID
    if (user) {
      res.json(user);  // Returning donor details if found
    } else {
      res.json({
        success: false,
        msg: "No User Found !"  // Returning error if donor is not found
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};



const updateDonor = async (req, res) => {
  const { 
    id, 
    donor_username, 
    donor_contact, 
    donor_address, 
    account_details 
  } = req.body;

  try {
    // Find the donor by ID
    let donor = await DonorInfo.findById(id);

    if (!donor) {
      return res.status(404).json({
        success: false,
        msg: "Donor not found",
      });
    }

    // Update donor details
    donor.donor_username = donor_username || donor.donor_username;
    donor.donor_contact.email = donor_contact.email || donor.donor_contact.email;
    donor.donor_contact.contact_no = donor_contact.contact_no || donor.donor_contact.contact_no;
    
    donor.donor_address.street = donor_address.street || donor.donor_address.street;
    donor.donor_address.city = donor_address.city || donor.donor_address.city;
    donor.donor_address.state = donor_address.state || donor.donor_address.state;
    donor.donor_address.zip_code = donor_address.zip_code || donor.donor_address.zip_code;
    donor.donor_address.country = donor_address.country || donor.donor_address.country;

    donor.account_details.bank_name = account_details.bank_name || donor.account_details.bank_name;
    donor.account_details.account_number = account_details.account_number || donor.account_details.account_number;
    donor.account_details.ifsc_code = account_details.ifsc_code || donor.account_details.ifsc_code;

    // Save the updated donor info to the database
    await donor.save();

    // Send response with success message
    res.status(200).json({
      success: true,
      msg: "Donor details updated successfully",
      donor: donor, // Send the updated donor object back (optional)
    });
  } catch (error) {
    // Catch any error and return it in the response
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
      error: error.message,
    });
  }
};




// delete donor

const deleteDonor = async (req,res)=>{
    try{
        const {id} = req.params;
        const donor = await DonorInfo.findByIdAndDelete(id);
        if(!donor){
            return res.status(404).json({message: "Donor Not Found"});
        }
        res.status(500).json({message: "Donor deleted Successfully!"})
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

  // Register a new donor
const registerDonor = async (req, res) => {
    try {
        const { donor_username, donor_contact, donor_password, donor_confirm_password } = req.body;
    
        // Validate if passwords match
        if (donor_password !== donor_confirm_password) {
          return res.status(400).json({ message: "Passwords do not match" });
        }
    
        // Check for existing username or email
        const existingDonor = await DonorInfo.findOne({
          $or: [
            { donor_username: donor_username },
            { "donor_contact.email": donor_contact.email },
          ],
        });
    
        if (existingDonor) {
          return res.status(400).json({ message: "Username or email already exists" });
        }
    
        // Create new donor
        const donor = await DonorInfo.create(req.body);
    
        // Respond with success message and donor details (excluding sensitive data like passwords)
        res.status(201).json({
          message: "Donor registered successfully",
          donor: {
            id: donor._id,
            name: donor.donor_name,
            username: donor.donor_username,
            email: donor.donor_contact.email,
          },
        });
    
        console.log("Donor created successfully");
      } catch (error) {
        // Handle any server errors
        res.status(500).json({ message: error.message });
      }
  };


  // login the donor

  const loginDonor = async (req, res) => {
    try {
      const { donor_username, donor_password } = req.body;
  
      // Find donor by username
      const donor = await DonorInfo.findOne({ donor_username });
      if (!donor) {
        return res.status(404).json({ message: "Donor not found" });
      }
  
      // Check password (if using plain text or bcrypt for hashed passwords)
      if (donor.donor_password !== donor_password) {
        return res.status(401).json({ message: "Invalid password" });
      }
  
      // Return donor details (omit sensitive information)
      res.status(200).json({
        message: "Donor logged in successfully",
        donor: {
          id: donor._id,
          name: donor.donor_name,
          username: donor.donor_username,
          email: donor.donor_contact.email,
        },
      });
    } catch (error) {
      res.status(500).json({ message: "Error logging in donor", error: error.message });
    }
  };

module.exports ={
   
    getDonors,
    getDonorById,
    updateDonor,
    deleteDonor,
    loginDonor,
    registerDonor,
    getDonorDetails
}