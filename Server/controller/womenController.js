const express = require("express")
const WomenModel = require("../model/WomenModel")


const womenController = express.Router()


womenController.get("/",async(req,res)=>{

 const women = await WomenModel.find()
 
 res.send(women)
})

womenController.post("/",(req,res)=>{

 const women = WomenModel.insertMany(req.body)
 res.send(women)
})

module.exports = womenController 
