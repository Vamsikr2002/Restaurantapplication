const Vendor=require('../models/Vendor');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const dotEnv=require('dotenv');
dotEnv.config();
const secretkey=process.env.Name;
const vendorRegister=async(req,res)=>{
    const{username,email,password}=req.body;
    try{
        const vendoremail=await Vendor.findOne({email});
        if(vendoremail){
            return res.status(400).json("email already exists");
        }
        const hashpasword=await bcrypt.hash(password,10);
        const newVendor=new Vendor({
            username,
            email,
            password:hashpasword
        });
        await newVendor.save();
        res.status(201).json({message:"vendor registered successfully"});
        console.log('registered');
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:"Internal server error"})
    }
}
const vendorLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the email exists
        const vendor = await Vendor.findOne({ email });
        if (!vendor) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // Compare the hashed password
        const isPasswordValid = await bcrypt.compare(password, vendor.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid email or password" });
        }
        const token=jwt.sign({
            vendorId:vendor._id
        },secretkey,{expiresIn:"1h"})

        res.status(200).json({ message: "Login successful",token });
        console.log(email,"this is token",token);
    } catch (error) {
        console.error('Error logging in vendor:', error);
        res.status(500).json({ error: "Internal server error" });
    }
};
const getdetails=async(req,res)=>{
    try{
        const vendors=await Vendor.find().populate('firm');
        res.json(vendors);
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:"Internal server error"});
    }
}
const getvyid=async(req,res)=>{
    const vendorid=req.params.id;
    try{
        const detail=await Vendor.findById(vendorid).populate('firm');
        if(!detail){
            res.status(400).json({error:"erroer in handling"})
        }
        res.status(200).json({detail});

        
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:"Internal server error"});
    }
}

module.exports = { vendorRegister, vendorLogin,getdetails,getvyid };