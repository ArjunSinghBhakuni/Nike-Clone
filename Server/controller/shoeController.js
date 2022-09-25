const express = require("express")
const ProductModel = require("../model/ProductModel")
const ShoeModel = require("../model/shoeDataModel")
 
 


const ShoeController = express.Router()


ShoeController.get("/", async(req,res)=>{

 const shoes = await ProductModel.findOne({category:"Shoes"})
 
 res.send([shoes])
})

module.exports = ShoeController;