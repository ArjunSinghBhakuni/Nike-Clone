const mongoose = require("mongoose")

const requireString = {type:String,required:true}
const requireNumber = {type:Number,required:true}
const requireArray = {type:Array,required:true}
const cartSchema = new mongoose.Schema({
 productId:String,
 title: reqString,
    gender: String,
    description: reqString,
    category: reqString,
    price: reqNumber,
    size: reqArray,
    color: reqString,
    rating: reqNumber,
    img: reqArray,
}, {
    versionKey: false
})

const CartModel = mongoose.model("cart")