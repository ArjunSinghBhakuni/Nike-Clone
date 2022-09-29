import * as types from './actiontype'
 

const intialState = {
 products:[],
 men:[],
 women:[],
 kids:[],
 cart:[],
 notLoading : true,
 isError : false
}

const reducer =(state = intialState,{type,payload})=>{

 switch(type){

  case types.MEN_DATA_LOADING: {
   return{
    ...state,
    notLoading:false,
    isError:false
   }
  }
  case types.MEN_DATA_SUCCESS: {
   return{
    ...state,
    men:payload,
    notLoading:true,
    isError:false
   }
  }
  case types.MEN_DATA_FAILURE: {
   return{
    ...state,
    notLoading:true,
    isError:true
   }
  }

  
  case types.PRODUCTS_DATA_LOADING: {
   return{
    ...state,
    notLoading:false,
    isError:false
   }
  }
  case types.PRODUCTS_DATA_SUCCESS: {
   return{
    ...state,
    products:payload,
    notLoading:true,
    isError:false
   }
  }
  case types.PRODUCTS_DATA_FAILURE: {
   return{
    ...state,
    notLoading:true,
    isError:true
   }
  }

  
  case types.WOMEN_DATA_LOADING: {
   return{
    ...state,
    notLoading:false,
    isError:false
   }
  }
  case types.WOMEN_DATA_SUCCESS: {
   return{
    ...state,
    women:payload,
    notLoading:true,
    isError:false
   }
  }
  case types.WOMEN_DATA_FAILURE: {
   return{
    ...state,
    notLoading:true,
    isError:true
   }
  }

  
  case types.KIDS_DATA_LOADING: {
   return{
    ...state,
    notLoading:false,
    isError:false
   }
  }
  case types.KIDS_DATA_SUCCESS: {
   return{
    ...state,
    kids:payload,
    notLoading:true,
    isError:false
   }
  }
  case types.KIDS_DATA_FAILURE: {
   return{
    ...state,
    notLoading:true,
    isError:true
   }
  }

  case types.CART_DATA_LOADING: {
   return{
    ...state,
   
    isError:false
   }
  }
  case types.CART_DATA_SUCCESS: {
   return{
    ...state,
    cart:payload,
 
    isError:false
   }
  }
  case types.CART_DATA_FAILURE: {
   return{
    ...state,
 
    isError:true
   }
  }
  case types.ADD_TO_CART_LOADING: {
   return{
    ...state,
 
    isError:false
   }
  }
  case types.ADD_TO_CART_SUCCESS: {
   const carts =  [...state.cart,payload]
   return{
    ...state,
    cart:carts,
 
    isError:false
   }
  }
  case types.ADD_TO_CART_FAILURE: {
   return{
    ...state,
  
    isError:true
   }
  }

  case types.COUNT_CART_LOADING: {
   return{
    ...state,
 
    isError:false
   }
  }
  case types.COUNT_CART_SUCCESS: {
  
   return{
    ...state,
    cart:payload,
 
    isError:false
   }
  }
  case types.COUNT_CART_FAILURE: {
   return{
    ...state,
 
    isError:true
   }
  }

  case types.DELETE_CART_LOADING: {
   return{
    ...state,
 
    isError:false
   }
  }
  case types.DELETE_CART_SUCCESS: {
  
   return{
    ...state,
    cart:payload,
  
    isError:false
   }
  }
  case types.DELETE_CART_FAILURE: {
   return{
    ...state,
   
    isError:true
   }
  }

  default : {
   return state
  }
 }
}

export  {reducer}