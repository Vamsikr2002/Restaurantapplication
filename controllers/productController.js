const product=require("../models/products");
const multer=require('multer');
const Firm=require("../models/Firm.js");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()+ Path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });
  
const addproduct=async(req,res)=>{
    try{
        const{productName,price,category,bestseller,description}=req.body;
        const image=req.file?req.file.filename:undefined;
        const firmId=req.params.findId;
        const firm=await Firm.findById(firmId);
        if(!firm){
            return res.status(404).json({error:"No firm found"});
        }
        const product=new product({
            productName,price,category,bestseller,description,image,firm:firm._id
        })
        const savedproduct=await product.save();
        firm.products.push(savedproduct);
        await firm.save();
        res.status(200).json(savedproduct);
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:"Internal server error"})
    }
}
module.exports={addproduct:[upload.single('image'),addproduct]};