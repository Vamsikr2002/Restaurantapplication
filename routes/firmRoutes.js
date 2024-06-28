const express = require('express');
const firmController = require('../controllers/firmController');
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();

// Define routes
router.post('/add-firm', verifyToken, firmController.addFirm);

module.exports = router;
