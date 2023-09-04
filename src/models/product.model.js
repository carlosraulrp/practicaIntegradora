const mongoose = require('mongoose')

const productColletction = "productos"

const productSchema = new mongoose.Schema({
    name: {type: String, required: true, max: 25},
    category: {type: String, required: true, max: 15},
    price: {type: Number, required: true, max: 3},
    description: {type: String, required: true, max: 100}
    
})

const productModel = mongoose.model(productColletction, productSchema)

module.exports = productModel