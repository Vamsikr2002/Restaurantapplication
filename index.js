const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyparser=require('body-parser');
const port = process.env.PORT || 5000; 
// Use environment variable for port if available
const vendorRoutes=require('./routes/vendorRoutes');
const firmRoutes=require('./routes/firmRoutes')
const productRoutes=require('./routes/productRoutes');
// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI,)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
        process.exit(1); // Exit the process if unable to connect
    });
    app.use(express.json());

    // Middleware to parse URL-encoded data
    app.use(express.urlencoded({ extended: true }));
// Define route
app.get('/home', (req, res) => {
    res.send("Hello and ready to start");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
app.use('/vendor',vendorRoutes);
app.use('/firm',firmRoutes);
app.use('/product',productRoutes);
