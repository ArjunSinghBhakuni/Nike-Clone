const express = require("express")


const womenController = express.Router()


womenController.get("/",(req,res)=>{

 res.send("user")
})

module.exports = womenController 
