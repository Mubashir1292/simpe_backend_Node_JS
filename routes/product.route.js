const express=require("express");
const router=express.Router();
const {getProducts,getSingleProduct, createProduct, updateProduct, deleteProduct}=require("../controller/product.controller.js");
// route paths...
router.get("/api/products",getProducts);
router.get("/api/product/:id",getSingleProduct);
router.post('/api/createProduct',createProduct);
router.put('/api/updateProduct/:id',updateProduct);
router.delete('/api/deleteProduct/:id',deleteProduct);
module.exports=router;