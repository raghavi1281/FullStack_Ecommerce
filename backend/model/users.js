const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cart:[
        {
            productID: Number,//reference to product
            quantity: Number
        }
    ],
    address:[
        {
            houseNo: String,
            building: String,
            state: String,
            pincode: Number
        }
    ]
});

userSchema.statics.signup = async function(name, email, password) {
    const exists = await this.findOne({email})

    if(exists){
        throw Error('Email already in use')
    }

    // hashing password using salt(random string that is added to password before getting hashed)
    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(password, salt)

    const user =  await this.create({name, email, password : hash})

    return user

}

userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({email})

    if(!user){
        throw Error('Invalid Email Id!')
    }

    //generates a new hash with password and compares it with already stored password 
    const match = await bcrypt.compare(password, user.password)
    if(!match) {
        throw Error('Incorrect Password')
    }

    return user
}

module.exports = mongoose.model('Users', userSchema);