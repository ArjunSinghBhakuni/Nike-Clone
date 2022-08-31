const express = require("express");
const CartModel = require("../model/CartModel");
const ProductModel = require("../model/ProductModel");

const cartController = express.Router();

cartController.get("/", async(req, res) => {
 const cart = await CartModel.find()
 res.send(cart)
});

cartController.post("/", async(req, res) => {
  const { id } = req.body;
 
  const cart = await CartModel.findOne({productId:id})
  
 
  if(cart){
    const incCart = await CartModel.findOneAndUpdate({_id:cart._id},  { count: Number(cart.count)+1 })
 console.log("inc" ,incCart)
    res.send(incCart)

 
  }
else {
 
 console.log("bye")
   const products = await ProductModel.findOne({ _id: id });
   
   const {
    _id,
    title,
    gender,
    description,
    category,
    price,
    size,
    color,
    rating,
    img,
   } = products;
   
   const CartProduct = new CartModel({
    productId: _id,
    title,
    gender,
    description,
    category,
    price,
    count:1,
    size,
    color,
    rating,
    img,
  });
 
  CartProduct.save();
  res.send(CartProduct);
 }
});

cartController.post("/count", async(req, res) => {
 const cart = await CartModel.find()
 res.send(cart)
});

cartController.post("/", async(req, res) => {
  const { id,type } = req.body;
 
 
 
   if(type="inc"){
 const incCart = CartModel.findOneAndUpdate({productId:id},{count:count+1},{
     new:true
    })

    return   res.send(incCart);
   } else {
    const decCart = CartModel.findOneAndUpdate({productId:id},{count:count-1},{
     new:true
    })

    return   res.send(decCart);
   }
 
})

module.exports = cartController;
