const Products = require('../model/products');
const express = require('express');

const router = express.Router();

//get all product documents
router.get('/', async(request, response) => {

    const product = await Products.find({}, {title:1, brand:1, price:1, thumbnail:1});
    response.status(200).json(product);
    
});

//get document of one particular product using product ID
router.get('/:id', async(request, response) => {
        const param = request.params.id
        console.log(param)
        const product = await Products.findById(param);
        response.status(200).json(product)
});


module.exports = router;