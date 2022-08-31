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
  const update =  await CartModel.findOneAndUpdate({_id:cart._id},  { price: Number(cart.price)+Number(cart.oldprice) })
   
  res.send(update)

 
  }
else {
 
 
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
    oldprice:price,
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
  const { id,type } = req.body;
  const cart = await CartModel.findOne({_id:id})
   if(type==="inc"){
 const incCart = await CartModel.findOneAndUpdate({_id:id},  { count: Number(cart.count)+1 })
   await CartModel.findOneAndUpdate({_id:id},  { price: Number(cart.price)+Number(cart.oldprice) })
    const updatedCart = await CartModel.find()
    return   res.send(updatedCart);
   } else if(type==="dec"){
    const decCart = await CartModel.findOneAndUpdate({_id:id},  { count: Number(cart.count)-1 })
    await CartModel.findOneAndUpdate({_id:id},  { price: Number(cart.price)-Number(cart.oldprice) })
    const updatedCart = await CartModel.find()
    return   res.send(updatedCart);
   }
 
})


cartController.delete("/delete/:id",async(req,res)=>{
  const { id } = req.params;
 
   await CartModel.deleteOne({_id:id})
  const updatedCart = await CartModel.find()
  return   res.send(updatedCart);
})
module.exports = cartController;
