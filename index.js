//! console.log("Working as the full stack developer gives me goosebumps...");
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const app = express();
// ! Adding Middle ware
app.use(express.json());
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

app.get('/', (req, res) => {
    res.send(`${res.statusCode} Something is better than Nothing..`);
});
app.post('/api/createProduct',async(req,res)=>{
    try{
        await Product.create(req.body);
        res.status(200).json(Product);
    }catch(error){
        console.error(error);
    }
})

