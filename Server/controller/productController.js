const express = require("express")


const productController = express.Router()


productController.get("/",(req,res)=>{

 res.send("products")
})

module.exports = productController 
