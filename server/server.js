require('dotenv').config();
const express  = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./config/db');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.use(cors());
const PORT = process.env.PORT || 5000;
// importing model from models folder to create a new ngo entry on post method.
const NgoInfo = require('./models/ngo.info')
// to allow data to not be undefined
app.use(express.json());



// middleware
app.use(express.urlencoded({extended:false}));
app.use('/api/ngo', require('./routes/ngoRoutes'));
app.use('/api/donor', require('./routes/donorRoutes'));


app.listen(PORT,()=>{
    console.log('hello world');
})

app.get('/', (req,res)=>{
    res.send('hello from node api!')
})


// app.post("/create/checkout/session", async (req, res) => {
//     const { money } = req.body;
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: [
//         {
//           price_data: {
//             currency: "usd", // or your currency
//             product_data: {
//               name: "Donation", // Description for the donation
//             },
//             unit_amount: money * 100, // Stripe requires the amount in cents
//           },
//           quantity: 1,
//         },
//       ],
//       mode: "payment",
//       success_url: "http://localhost:3000/success", // Replace with your success URL
//       cancel_url: "http://localhost:3000/cancel",  // Replace with your cancel URL
//     });
  
//     res.json({ id: session.id });
//   });
  
// const stripe = require('stripe')('sk_test_YourSecretKey');

// app.post("/create/checkout/session", async (req, res) => {
//   const { money, user, ngo } = req.body;

//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       mode: 'payment',
//       line_items: [
//         {
//           price_data: {
//             currency: 'usd',
//             product_data: {
//               name: `Donation to ${ngo.name}`, // Display NGO name
//               description: `Donor: ${user.username} (${user.email})\nNGO: ${ngo.name}`, // Show user and NGO details
//             },
//             unit_amount: money * 100, // Amount in cents
//           },
//           quantity: 1,
//         },
//       ],
//       success_url: 'http://localhost:5173/payment_success',
//       cancel_url: 'http://localhost:5173/payment_fail',
//     });

//     res.json({ id: session.id });
//   } catch (error) {
//     console.error("Error creating Stripe session:", error);
//     res.status(500).json({ error: error.message });
//   }
// });

app.post("/create/checkout/session", async (req, res) => {
  const { money, user, ngo } = req.body;

  if (!money || money <= 0) {
    return res.status(400).json({ error: "Invalid donation amount." });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'inr', // Set currency to INR
            product_data: {
              name: `Donation to ${ngo.name}`, // Display NGO name
              description: `Donor: ${user.username} (${user.email})\nNGO: ${ngo.name}`, // Show user and NGO details
            },
            unit_amount: Math.round(money * 100), // Amount in paise (1 INR = 100 paise)
          },
          quantity: 1,
        },
      ],
      success_url: 'http://localhost:5173/payment_success',
      cancel_url: 'http://localhost:5173/payment_fail',
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating Stripe session:", error);
    res.status(500).json({ error: error.message });
  }
});


connectDB();



