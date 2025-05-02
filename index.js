//! console.log("Working as the full stack developer gives me goosebumps...");

const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const app = express();

// ! Adding Middle ware
app.use(express.json());

//! Adding form Encoded
app.use(express.urlencoded({extended:false}));

//! First connection with database
mongoose.connect(`mongodb+srv://mubashirliaqat72:adminPassword@samplecluster.hpg7p42.mongodb.net/SAMPLE-NODE-BACKEND-APP?retryWrites=true&w=majority&appName=sampleCluster`)
    .then(() => {
        console.log("Connected to database")
        //! starting the server...
        app.listen(3000, () => {
            console.log("Server is listening on port 3000");
        });
    })
    .catch(() => console.log("Failed to Connect to Database"))

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ! finding the single product
app.get('/api/product/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message:error.message});
    }
})

app.post('/api/createProduct', async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(200).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//? update the product api...
app.put('/api/updateProduct/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        if(!product){
            res.status(404).json({message:'Product not founded'});
        }
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({message:error.message});
    }
})

//? delete the product api...
app.delete("/api/product/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            res.status(404).json({message:'Product Not founded'});
        }
        res.status(200).json({message:'Product Deleted Successfully..'});
    }catch(error){
        res.status(500).json({message:error.message});
    }
})