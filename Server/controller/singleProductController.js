const express = require("express")
const ProductModel = require("../model/ProductModel")


const singleProductController = express.Router()

singleProductController.get("/:id", async(req,res)=>{

 const params = req.params
 const product = await ProductModel.find({_id:params})
 
 res.send(product)
})

module.exports = singleProductController 