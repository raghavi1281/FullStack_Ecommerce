const express = require('express')
const Products = require('../model/products')

const router = express.Router()


router.get('/bySearch/:searchString', async(request, response) => {

    const searchString = request.params.searchString
    //const pattern = new RegExp(`/${searchString}/i`) ---not working
    const products = await Products.find({$or: [{title: {$regex: searchString, $options: 'i'}}, {description: {$regex: searchString, $options: 'i'}}]})
    console.log(searchString)
    response.status(200).json(products)

})

router.get('/byCategory/:category', async(request, response) => {
    
    const categoryfilter = request.params.category
    const products = await Products.find({category : categoryfilter})
    console.log(categoryfilter)
    response.status(200).json(products)
    
})



module.exports = router