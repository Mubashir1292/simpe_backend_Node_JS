//? should be controller and the manage the controller functions...
const Product = require("../models/product.model.js");
const getProducts=async(req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const getSingleProduct = async(req,res)=>{
    try{
        const {id}=req.params;
        const product = await Product.findById(id);
        if(!product){
            return res.status(404).json({message:"Not founded the Product..."})
        }
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}
const createProduct = async(req,res)=>{
    try {
            const newProduct = await Product.create(req.body);
            res.status(200).json(newProduct);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
}
const updateProduct= async(req,res)=>{
    try{
        const {id}=req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        if(!product){
           return res.status(404).json({message:'Product not founded'});
        }
        const updatedProduct = await Product.findById(id);
        return res.status(200).json(updatedProduct);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}
const deleteProduct = async (req,res)=>{
    try{
        const {id}=req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message:'Product not founded for deletion..'});
        }
        res.status(200).json({message:'Product deleted successfully...'});
    }catch(error){
        res.status(500).json({message:error.message});
    }
}
module.exports={
    getProducts,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct
}