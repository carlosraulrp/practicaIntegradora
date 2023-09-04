const mongoose = require('mongoose')

const userColletction = "usuarios"

const userSchema = new mongoose.Schema({
    nombre: {type: String, required: true, max: 50},
    apellido: {type: String, required: true, max: 50},
    email: {type: String, required: true, max: 25}
})

const userModel = mongoose.model(userColletction, userSchema)

module.exports = {userModel}