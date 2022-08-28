const express = require("express")
const { connection } = require("mongoose")

const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
 res.send("home")
})


app.listen(8080,async()=>{

 try{
  await connection
  console.log("connection success")
 }catch(err){console.log(err)}

 console.log("server connected at 8080")
})