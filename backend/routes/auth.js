const express = require('express');
const Users = require('../model/users')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

//Function to create JWT, signing user ID with secret key, no expiry
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET_KEY)
}

const router = express.Router();

//body-parser- middleware not required if express version is more than v-4.16.0
//router.use(bodyParser.json())

//authenticating an existing user
router.post('/login', async(request, response) => {
    const {email, password} = request.body
    
    try{
        const user = await Users.login(email, password)

        //creating a JWToken
        const token = createToken(user._id)
        console.log(user)
        response.status(200).json({token})
    } catch(error) {
        console.log(error)
        response.status(400).json({error: error.message})
    }

});

//register and authenticating a new user
router.post('/signUp', async(request, response) => {
    const {name, email, password} = request.body
    //console.log(data.name);
    //response.json({mssg: "registration done!"})

    //hash passwords before storing into database
    try{
        const user = await Users.signup(name, email, password)

        //creating a JWToken
        const token = createToken(user._id)
        console.log(user)
        response.status(200).json({token})

    } catch (error) {
        console.log(error)
        response.status(400).json({error: error.message})
    }
});

module.exports = router;