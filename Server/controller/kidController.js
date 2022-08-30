const express = require("express")
const KidModel = require("../model/KidsModel")


const kidController = express.Router()


kidController.get("/",async(req,res)=>{

 const kid = await KidModel.find()
 
 res.send(kid)
})

kidController.post("/",(req,res)=>{

 const kid = KidModel.insertMany(req.body)
 res.send(kid)
})

module.exports = kidController 
