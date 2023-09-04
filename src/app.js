const express = require('express')
const mongoose = require('mongoose')
const usersRouter = require ("./routes/users.router")
const productsRouter = require("./routes/products.router")
const app = express()

const PORT = 8080

app.use(express.json())
//Routing
app.use("/", usersRouter, productsRouter)



app.listen(PORT, () =>{
    console.log(`Server is running in port: ${PORT}`)
})



mongoose.connect('mongodb+srv://carlosraulrp:811563@cluster0.4l731ku.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log("Conectado a la DB de MongoAtlas")
})
.catch(error =>{
    console.log("Error en la conexion", error)
})