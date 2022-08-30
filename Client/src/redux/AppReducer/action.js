import * as types from "./actiontype"
import axios from "axios";

export const getMenData = ()=>(dispatch)=>{

 dispatch({ type: types.MEN_DATA_LOADING });
  axios
    .get("/men")
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
     .get("/women")
     .then((r) => dispatch({ type: types.WOMEN_DATA_SUCCESS, payload: r.data }))
     .catch((e) => dispatch({ type: types.WOMEN_DATA_FAILURE}));
 
 
 }
 
 export const getKidsData = ()=>(dispatch)=>{

  dispatch({ type: types.KIDS_DATA_LOADING });
   axios
     .get("/kids")
     .then((r) => dispatch({ type: types.KIDS_DATA_SUCCESS, payload: r.data }))
     .catch((e) => dispatch({ type: types.KIDS_DATA_FAILURE}));
 
 
 }