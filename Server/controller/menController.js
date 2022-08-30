const express = require("express")
const MenModel = require("../model/MensModel")


const menController = express.Router()


menController.get("/", (req,res)=>{
res.send("men")
 
})
menController.post("/",(req,res)=>{
 
 const men = MenModel.insertMany(req.body)
 
 res.send(men)
})

module.exports = menController 
