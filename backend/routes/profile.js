const express = require('express')
const Users = require('../model/users')
const authprotection = require('../jwtAuth')
const { model } = require('mongoose')

const router = express.Router()

router.use(authprotection)

router.get('/', async(request, response) => {
    const id = request.user._id
    const user = await Users.findById(id)
    const profile = {
        name: user.name,
        email: user.email,
        cart: user.cart,
        address: user.address
    }
    response.json(profile)
})

module.exports = router
