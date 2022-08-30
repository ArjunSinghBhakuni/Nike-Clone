const express = require("express")
const ProductModel = require("../model/ProductModel")


const productController = express.Router()


productController.get("/", async(req,res)=>{

 const products = await ProductModel.find()
 
 res.send(products)
})
productController.post("/",(req,res)=>{

 const products = ProductModel.insertMany(req.body)
 res.send(products)
})

module.exports = productController 
