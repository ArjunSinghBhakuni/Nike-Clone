const express = require("express")


const kidController = express.Router()


kidController.get("/",(req,res)=>{

 res.send("kids")
})

module.exports = kidController 
