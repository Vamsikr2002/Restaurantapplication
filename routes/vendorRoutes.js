const vendorController=require('../controllers/vendorController');
const express=require('express');
const router=express.Router();
router.post('/register',vendorController.vendorRegister);
router.post('/login',vendorController.vendorLogin);
router.get('/all-vendors',vendorController.getdetails);
router.get("/single-vendor/:id",vendorController.getvyid);
module.exports=router;