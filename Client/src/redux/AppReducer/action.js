import * as types from "./actiontype"
import axios from "axios";

export const getMenData = ()=>(dispatch)=>{

 dispatch({ type: types.MEN_DATA_LOADING });
  axios({
    method:"GET",
    url:"/products/men",
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem("token")}`
    },
  })
   
    .then((r) => dispatch({ type: types.MEN_DATA_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: types.MEN_DATA_FAILURE}));


}

export const getProductsData = ()=>(dispatch)=>{

  dispatch({ type: types.PRODUCTS_DATA_LOADING});
   axios({
    method:"GET",
    url:"/products",
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem("token")}`
    },
  })
     
     .then((r) => dispatch({ type: types.PRODUCTS_DATA_SUCCESS, payload: r.data }))
     .catch((e) => dispatch({ type: types.PRODUCTS_DATA_FAILURE}));
 
 
 }

 export const getWomenData = ()=>(dispatch)=>{

  dispatch({ type: types.WOMEN_DATA_LOADING });
   axios({
    method:"GET",
    url:"/products/women",
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem("token")}`
    },
  })
      
     .then((r) => dispatch({ type: types.WOMEN_DATA_SUCCESS, payload: r.data }))
     .catch((e) => dispatch({ type: types.WOMEN_DATA_FAILURE}));
 
 
 }
 
 export const getKidsData = ()=>(dispatch)=>{

  dispatch({ type: types.KIDS_DATA_LOADING });
   axios({
    method:"GET",
    url:"/products/kids",
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem("token")}`
    },
  })
    
     .then((r) => dispatch({ type: types.KIDS_DATA_SUCCESS, payload: r.data }))
     .catch((e) => dispatch({ type: types.KIDS_DATA_FAILURE}));
 
 
 }

 export const getCartData = ()=>(dispatch)=>{

  dispatch({ type: types.CART_DATA_LOADING });
   axios({
    method:"GET",
    url:"/cart",
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem("token")}`
    },
  })
    
     .then((r) => dispatch({ type: types.CART_DATA_SUCCESS, payload: r.data }))
     .catch((e) => dispatch({ type: types.CART_DATA_FAILURE}));
 
 
 }

 export const addCartData = (id)=>(dispatch)=>{
 
  dispatch({ type: types.CART_DATA_LOADING });
  return axios ({
    method:"POST",
    url:"/cart",
    data: {id } ,
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${localStorage.getItem("token")}`
    },
  })
    //  .post("/cart",{id})
     .then((r) => dispatch({ type: types.CART_DATA_SUCCESS, payload: r.data }))
     .catch((e) => dispatch({ type: types.CART_DATA_FAILURE}));
 
 
 }

 export const countCartData = (id,type)=>(dispatch)=>{
  // console.log("id",id)
    dispatch({ type: types.CART_DATA_LOADING });
    return axios
    ({
      method:"POST",
      url:"/cart/count",
     
      data: {id,type} ,
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${localStorage.getItem("token")}`
      },
    })
       
       .then((r) => dispatch({ type: types.CART_DATA_SUCCESS, payload: r.data }))
       .catch((e) => dispatch({ type: types.CART_DATA_FAILURE}));
   
   
   }

   export const deleteCartData = (id)=>(dispatch)=>{
    // console.log("id",id)
      dispatch({ type: types.CART_DATA_LOADING });
      return axios
      ({
        method:"DELETE",
        url:`/cart/delete/${id}`,
       
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${localStorage.getItem("token")}`
        },
      })
        //  .delete(`/cart/delete/${id}`)
         .then((r) => dispatch({ type: types.CART_DATA_SUCCESS, payload: r.data }))
         .catch((e) => dispatch({ type: types.CART_DATA_FAILURE}));
     
     
     }
  