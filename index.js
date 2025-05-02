//! console.log("Working as the full stack developer gives me goosebumps...");

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router=require("./routes/product.route.js");
// ! Adding Middle ware
app.use(express.json());

//! Adding form Encoded
app.use(express.urlencoded({extended:false}));

//! routes
app.use('/',router);



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

