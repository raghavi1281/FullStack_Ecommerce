const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    userID: String, //reference to the user
    products: [
        {
            productID: {
                type: Number,
                required: true
            }, //reference to product
            price: Number,
            quantity: Number
        }
    ],
        date: Date
});

module.exports = mongoose.model('Orders', orderSchema);