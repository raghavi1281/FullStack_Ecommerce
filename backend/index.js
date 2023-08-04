require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const authRoutes = require('./routes/auth.js')
const profileRoute = require('./routes/profile.js')
const cartRoutes = require('./routes/cart.js')
const orderRoutes = require('./routes/order.js')
const productRoutes = require('./routes/products.js')
const filterRoutes = require('./routes/filters.js')

const app = express();

//Application level middleware
//setting response headers to enable CORS
app.use(cors())
// app.use((request,response,next) => {
//     response.setHeader("Access-Control-Allow-Origin", "*");  // any origin is allowed to access response
//     response.setHeader(
//         "Access-Control-Allow-Headers", 
//         "Origin, X-Requested-With, Content-Type, Accept"); 
//     response.setHeader(
//         "Access-Control-Allow-Methods", 
//         "GET, POST, PATCH, DELETE, OPTIONS");
//     next();
// })

//built in middleware express.json()
app.use(express.json())


//registering routes for difeerent sections of application
app.use('/products', productRoutes)
app.use('/filter',filterRoutes)
app.use('/user', authRoutes)
app.use('/profile', profileRoute)
app.use('/cart', cartRoutes)
app.use('/order', orderRoutes)

//connecting to database on mongoDB Atlas and starting the server
mongoose.connect(process.env.mongodb_uri)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connected to DB & listening on port")
        })
    }).catch((error) => {
        console.log(error)
    })

