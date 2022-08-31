import * as types from "./actiontype"
import axios from "axios";

export const getMenData = ()=>(dispatch)=>{

 dispatch({ type: types.MEN_DATA_LOADING });
  axios
    .get("/products/men")
    .then((r) => dispatch({ type: types.MEN_DATA_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: types.MEN_DATA_FAILURE}));


}

export const getProductsData = ()=>(dispatch)=>{

  dispatch({ type: types.PRODUCTS_DATA_LOADING});
   axios
     .get("/products")
     .then((r) => dispatch({ type: types.PRODUCTS_DATA_SUCCESS, payload: r.data }))
     .catch((e) => dispatch({ type: types.PRODUCTS_DATA_FAILURE}));
 
 
 }

 export const getWomenData = ()=>(dispatch)=>{

  dispatch({ type: types.WOMEN_DATA_LOADING });
   axios
     .get("/products/women")
     .then((r) => dispatch({ type: types.WOMEN_DATA_SUCCESS, payload: r.data }))
     .catch((e) => dispatch({ type: types.WOMEN_DATA_FAILURE}));
 
 
 }
 
 export const getKidsData = ()=>(dispatch)=>{

  dispatch({ type: types.KIDS_DATA_LOADING });
   axios
     .get("/products/kids")
     .then((r) => dispatch({ type: types.KIDS_DATA_SUCCESS, payload: r.data }))
     .catch((e) => dispatch({ type: types.KIDS_DATA_FAILURE}));
 
 
 }

 export const getCartData = ()=>(dispatch)=>{

  dispatch({ type: types.CART_DATA_LOADING });
   axios
     .get("/cart")
     .then((r) => dispatch({ type: types.CART_DATA_SUCCESS, payload: r.data }))
     .catch((e) => dispatch({ type: types.CART_DATA_FAILURE}));
 
 
 }

 export const addCartData = (id)=>(dispatch)=>{
console.log("id",id)
  dispatch({ type: types.CART_DATA_LOADING });
  return axios
     .post("/cart",{id})
     .then((r) => dispatch({ type: types.CART_DATA_SUCCESS, payload: r.data }))
     .catch((e) => dispatch({ type: types.CART_DATA_FAILURE}));
 
 
 }

 export const countCartData = (id,type)=>(dispatch)=>{
  console.log("id",id)
    dispatch({ type: types.CART_DATA_LOADING });
    return axios
       .post("/cart/count",{id,type})
       .then((r) => dispatch({ type: types.CART_DATA_SUCCESS, payload: r.data }))
       .catch((e) => dispatch({ type: types.CART_DATA_FAILURE}));
   
   
   }

   export const deleteCartData = (id)=>(dispatch)=>{
    console.log("id",id)
      dispatch({ type: types.CART_DATA_LOADING });
      return axios
         .delete(`/cart/delete/${id}`)
         .then((r) => dispatch({ type: types.CART_DATA_SUCCESS, payload: r.data }))
         .catch((e) => dispatch({ type: types.CART_DATA_FAILURE}));
     
     
     }
  