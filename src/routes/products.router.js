const {Router} = require('express')
const {productModel} = require('../models/product.model')

const router = Router()

router.get("/api/products", async(req, res) =>{
    try {
        let products = await productModel.find()
        res.send({result: "success", payload: products})
    } catch (error) {
        console.log(error)
    }
})

router.post("/api/addProduct", async(req, res) =>{
    let {name, category, price, description} = req.body
    if(!name || !category || !price || !description){
        res.send({status:"error", error: "faltan parametros"})
    }

    let result = await productModel.create({name, category, price, description})
    res.send({result: "success", payload: result})
})

router.put("/api/:pid", async(req, res) =>{
    let {pid} = req.params
    let productToReplace = req.body
    if(!productToReplace.name || !productToReplace.category || !productToReplace.price ||!productToReplace.description){
        res.send({status:"error", error: "faltan parametros"})
    }

    let result = await productModel.updateOne({_id:pid}, productToReplace)
    res.send({result: "success", payload: result})



})

router.delete("/api/:pid", async(req, res) => {
    try {
        let { pid } = req.params;
        let result = await productModel.deleteOne({ _id: pid });

        if (result.deletedCount === 1) {
            res.send({ result: "success", message: "Producto eliminado con éxito" });
        } else {
            res.send({ result: "error", message: "No se encontró el producto con el ID proporcionado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ result: "error", message: "Error al eliminar el producto" });
    }
});






module.exports = router