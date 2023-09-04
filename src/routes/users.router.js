const {Router} = require('express')
const {userModel} = require('../models/user.model')

const router = Router()

router.get("/api/users", async(req, res) =>{
    try {
        let users = await userModel.find()
        res.send({result: "success", payload: users})
    } catch (error) {
        console.log(error)
    }
})

router.post("/api/users", async(req,res) =>{
    let {nombre, apellido, email} = req.body

    if(!nombre || !apellido || !email){
        res.send({status:"error", error: "faltan parametros"})
    }

    let result = await userModel.create({nombre, apellido, email})
    res.send({result: "success", payload: result})
})

router.put("/api/:uid", async(req, res) =>{
    let {uid} = req.params
    let userToReplace = req.body

    if(!userToReplace.nombre || !userToReplace.apellido || !userToReplace.email){
        res.send({status:"error", error: "faltan parametros"})
    }
    let result = await userModel.updateOne({_id:uid}, userToReplace)
    res.send({result: "success", payload: result})
})

router.delete("/api/:uid", async(req, res) =>{
    let {uid} = req.params
    let result = await userModel.deleteOne({_id:uid})
    res.send({result:"succes", payload: result})
})

module.exports = router