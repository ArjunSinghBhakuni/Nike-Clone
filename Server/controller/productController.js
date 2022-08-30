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
productController.get("/men", async(req,res)=>{

 const products = await ProductModel.find({gender:"Men"})
 
 res.send(products)
})
productController.get("/women", async(req,res)=>{

 const products = await ProductModel.find({gender:"Women"})
 
 res.send(products)
})
productController.get("/kids", async(req,res)=>{

 const products = await ProductModel.find({gender:"Kids"})
 
 res.send(products)
})

module.exports = productController 
