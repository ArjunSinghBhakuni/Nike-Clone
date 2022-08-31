const mongoose = require("mongoose")

const reqString = {type:String,required:true}
const reqNumber = {type:Number,required:true}
const reqArray = {type:Array,required:true}

const cartSchema = new mongoose.Schema({
 productId:String,
 title: reqString,
    gender: String,
    description: reqString,
    category: reqString,
    price: reqNumber,
    oldprice:reqNumber,
    count:Number,
    size: reqArray,
    color: reqString,
    rating: reqNumber,
    img: reqArray,
}, {
    versionKey: false
})

const CartModel = mongoose.model("cart",cartSchema)

module.exports = CartModel