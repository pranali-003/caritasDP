const mongoose = require('mongoose');

// Define the schema for each subcategory under 'food'
const foodSubcategorySchema = new mongoose.Schema({
  name: { type: String, required: true },  // e.g., 'rice', 'sugar'
  quantity: { type: Number, required: true }, // e.g., 50 (kg)
  unit: { type: String, required: true },  // e.g., 'kg'
});


const clothingSubcategorySchema = new mongoose.Schema({
  name: { type: String, required: true },  // e.g., 'rice', 'sugar'
  quantity: { type: Number, required: true }, // e.g., 50 (kg)
  unit: { type: String, required: true },  // e.g., 'kg'
});

const study_materialSubcategorySchema = new mongoose.Schema({
  name: { type: String, required: true },  // e.g., 'rice', 'sugar'
  quantity: { type: Number, required: true }, // e.g., 50 (kg)
  unit: { type: String, required: true },  // e.g., 'kg'
});




// Define the schema for requirements
const requirementsSchema = new mongoose.Schema({
  food: {
    required: { type: Boolean, default: false },
    total_quantity: { type: Number },  // Total quantity of all subcategories
    unit: { type: String },  // Overall unit (e.g., 'kg')
    subcategories: [foodSubcategorySchema],  // Array of subcategories
  },
  clothing: {
    required: { type: Boolean, default: false },
    quantity: { type: Number },
    unit: { type: String },
    subcategories: [clothingSubcategorySchema]
  },
  study_material: {
    required: { type: Boolean, default: false },
    quantity: { type: Number },
    unit: { type: String },
    subcategories: [study_materialSubcategorySchema],
  },
  money: {
    required: { type: Boolean, default: false },
    amount: { type: Number },
    currency: { type: String },
  },
});


const NGOInfoSchema = new mongoose.Schema({
  name: { 
    type: String, required: true 
  },
  registration_number : {
    type: String,
    required: true
  },
  authentication_status :{
    type: Boolean, default: false
  },
  contactInfo: {
    email: { type: String, required: true },
    phone: { type: String, required: true },
    website : {type: String, }
  },
  address : {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip_code: { type: String, required: true },
    country: { type: String, required: true }
  },
  objective :{
    type: String, required: true 
  },
  profile_photo :{
    type: String, required: true 
  },
  requirements: requirementsSchema,
  accountDetails: {
    bankName: { type: String, required: true },
    accountNumber: { type: String, required: true },
  },
  verified: { 
    type: Boolean, default: false 
  },
 },
 {
   timestamps : true,  // created and updated
 }
);

const NGOInfo = mongoose.model('NGO', NGOInfoSchema); 
module.exports  = NGOInfo;
