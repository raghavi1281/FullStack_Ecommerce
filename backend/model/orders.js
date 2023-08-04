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

orderSchema.statics.checkOut = async function(userID, products) {
    let orderDate = new Date()
    const order =  await this.create({userID, products, date: orderDate})
    return order
}

module.exports = mongoose.model('Orders', orderSchema);