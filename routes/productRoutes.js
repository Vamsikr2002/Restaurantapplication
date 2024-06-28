const express = require('express');
const productController = require("../controllers/productController");

const router = express.Router();

// Define routes
router.post("/add-product/:firmId", productController.addproduct);

module.exports = router;
