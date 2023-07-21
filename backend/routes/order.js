const express = require('express')
const Users = require('../model/users')
const Orders = require('../model/orders')

const router = express.Router();

//To place an order
router.post('/checkOut', async(request, response) => {

})

//to get details of all the orders placed
router.get('/pastOrders', async(request, response) => {

})

//to get deatils of a particular order
router.get('/pastOrders/:id', async(request, response) => {

})

module.exports = router