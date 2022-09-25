const express = require("express")
const ShoeModel = require("../model/shoeDataModel")
 
 


const ShoeController = express.Router()


ShoeController.get("/", async(req,res)=>{

 const products = await ShoeModel.find()
 
 res.send(products)
})