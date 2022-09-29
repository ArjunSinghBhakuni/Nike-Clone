const express = require("express")
const ProductModel = require("../model/ProductModel")


const productController = express.Router()


productController.get("/", async(req,res)=>{

 const products = await ProductModel.find()
 
 res.send(products)
})
productController.get("/men", async(req,res)=>{

 const products = await ProductModel.find({gender:"Men"})
 
 res.send(products)
})
productController.get("/women", async(req,res)=>{
// console.log("req.url",req.url)
 const products = await ProductModel.find({gender:"Women"})
 // console.log(products)
 res.send(products)
})
productController.get("/kids", async(req,res)=>{

 const products = await ProductModel.find({gender:"Kids"})
 
 res.send(products)
})
productController.get("/:id", async(req,res)=>{

 const {id} = req.params
 
 const product = await ProductModel.findOne({_id:id})
 // console.log("product",product)
 res.send(product)
})
productController.post("/",(req,res)=>{

 const products = ProductModel.insertMany(req.body)
 res.send(products)
})


 

module.exports = productController 
