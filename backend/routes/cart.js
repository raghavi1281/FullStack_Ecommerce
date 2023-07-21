const express = require('express')
const Users = require('../model/users')
const authprotection = require('../jwtAuth')

const router = express.Router();

router.use(authprotection)

//cart of the given user
router.get('/deatils', async(request, response) => {
    const id = request.user._id
    const cart = Users.findById(id).select('cart')
    response.json(cart)
});

//to add a product to the cart
router.post('addProduct', async(request, response) => {

});

module.exports = router;