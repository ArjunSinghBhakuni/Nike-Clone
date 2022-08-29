const express = require("express")
const MenModel = require("../model/MenModel")


const menController = express.Router()


menController.get("/", (req,res)=>{
res.send("men")
 
})
menController.post("/",(req,res)=>{
console.log(req.body)
 const men = MenModel.insertMany(req.body)
 console.log(men)
 res.send(men)
})

module.exports = menController 
