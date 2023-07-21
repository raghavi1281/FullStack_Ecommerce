const express = require('express')
const Users = require('../model/users')
const authprotection = require('../jwtAuth')
const { model } = require('mongoose')

const router = express.Router()

router.use(authprotection)

router.get('/', async(request, response) => {
    const id = request.user._id
    const user = Users.findById(id)
    response.json(user)
})

module.exports = router
