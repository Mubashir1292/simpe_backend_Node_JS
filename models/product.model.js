//! This file will handle the product shape and its essential properties...
const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Product Name.."]
    },
    price: {
        type: Number,
        required: [true, "Please Enter Product Price..."]
    },
    quantity: {
        type: Number,
        default: 0,
        required: [true, "Please Enter the Quantity..."]
    },
    image: {
        type: String,
        required: [true, "Please Select the Image"],
    },
},
    {
        timeStamps: true,
    });

const Product = mongoose.model("Product",ProductSchema);
module.exports=Product;