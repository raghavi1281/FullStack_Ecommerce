const express = require('express')
const authprotection = require('../jwtAuth')
const Users = require('../model/users')
const Orders = require('../model/orders')

const router = express.Router();

router.use(authprotection)

//To place an order
router.post('/checkOut', async(request, response) => {
    const products = request.body
    const userID = request.user._id
    console.log(request.user._id)
    console.log(products)


    try{
        const order = await Orders.checkOut(userID, products)
        response.status(200).json({order})
    } catch(error) {
        console.log(error)
        response.status(400).json("Unable to place Order")
    }

})

//to get details of all the orders placed
router.get('/pastOrders', async(request, response) => {

})

//to get deatils of a particular order
router.get('/pastOrders/:id', async(request, response) => {

})

module.exports = router