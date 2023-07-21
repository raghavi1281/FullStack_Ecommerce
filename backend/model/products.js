const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id: Number,
    title:  String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: [String]
});

const Products = mongoose.model("Products", productSchema)

module.exports = Products;