const {Router} = require('express')
const productModel = require('../models/product.model')

const router = Router()

router.get("/api/products", async(req, res) =>{
    try {
        let products = await productModel.find()
        res.send({result: "success", payload: products})
    } catch (error) {
        console.log(error)
    }
})



module.exports = router