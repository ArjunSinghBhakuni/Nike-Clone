const express = require("express")


const menController = express.Router()


menController.get("/",(req,res)=>{

 res.send("men")
})

module.exports = menController 
