// // require('dotenv').config();
// const mongoose = require('mongoose')

// const connectDB = async ()=>{
//    await mongoose.connect("mongodb+srv://pranalinage20:mSNZ0OTc6uV8rO4W@cluster0.4d2sy.mongodb.net/retryWrites=true&w=majority&appName=Cluster0")
// .then(()=>{
//     console.log('Connected Successfully!');
// })
// .catch((error)=>{
//     console.log("Connection Failed")
//     console.log(error);

// })
// }

// module.exports = connectDB;

require('dotenv').config();
const mongoose = require('mongoose')

const connectDB = async ()=>{
   await mongoose.connect("mongodb+srv://pranalinage20:rgZ1FJWvKsOfeb7K@donationplatform.f6trv.mongodb.net/caritas?retryWrites=true&w=majority&appName=DonationPlatform")
.then(()=>{
    console.log('Connected Successfully!');
})
.catch((error)=>{
    console.log("Connection Failed")
    console.log(error);

})
}

module.exports = connectDB;