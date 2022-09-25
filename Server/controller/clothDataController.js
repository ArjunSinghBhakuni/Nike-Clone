const express = require("express")
const ClothModel = require("../model/clothDataModel")
 
 


const clothDataController = express.Router()


clothDataController.get("/", async(req,res)=>{

 const products = await ClothModel.find()
 
 res.send(products)
})