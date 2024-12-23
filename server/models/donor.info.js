const mongoose = require("mongoose");

const DonorInfoSchema = new mongoose.Schema(
  {
    donor_name: {
      type: String,
      required: true,
    },
    donor_gender: {
      type: String,
      required : true,
    },
    donor_age:{
      type: String,
      required : true,
    },
    donor_contact: {
      email: { type: String, required: true },
      contact_no: { type: String, required: true },
    },
    donor_address: {
      street: { type: String, required: false },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zip_code: { type: String, required: true },
      country: { type: String, required: true },
    },
    account_details: {
      bank_name: { type: String, required: true },
      account_number: { type: String, required: true },
      ifsc_code: { type: String, required: true },
      pan_card : {type: String, required: true}
    },
    donor_username: {
      type: String,
      required: true,
    },
    donor_password:{
      type :String,
      required :true
    },
    donor_confirm_password:{
      type :String,
      required :true
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("DonorInfo", DonorInfoSchema);
