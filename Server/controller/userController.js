const express = require("express")


const userController = express.Router()


userController.get("/",(req,res)=>{

 res.send("user")
})

module.exports = userController 
