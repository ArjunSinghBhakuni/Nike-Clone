import * as types from './actiontype'
 

const intialState = {
 products:[],
 men:[],
 women:[],
 kids:[],
 isLoading : false,
 isError : false
}

const reducer =(state = intialState,{type,payload})=>{

 switch(type){

  case types.MEN_DATA_LOADING: {
   return{
    ...state,
    isLoading:true,
    isError:false
   }
  }
  case types.MEN_DATA_SUCCESS: {
   return{
    ...state,
    men:payload,
    isLoading:false,
    isError:false
   }
  }
  case types.MEN_DATA_FAILURE: {
   return{
    ...state,
    isLoading:false,
    isError:true
   }
  }

  
  case types.PRODUCTS_DATA_LOADING: {
   return{
    ...state,
    isLoading:true,
    isError:false
   }
  }
  case types.PRODUCTS_DATA_SUCCESS: {
   return{
    ...state,
    products:payload,
    isLoading:false,
    isError:false
   }
  }
  case types.PRODUCTS_DATA_FAILURE: {
   return{
    ...state,
    isLoading:false,
    isError:true
   }
  }

  
  case types.WOMEN_DATA_LOADING: {
   return{
    ...state,
    isLoading:true,
    isError:false
   }
  }
  case types.WOMEN_DATA_SUCCESS: {
   return{
    ...state,
    women:payload,
    isLoading:false,
    isError:false
   }
  }
  case types.WOMEN_DATA_FAILURE: {
   return{
    ...state,
    isLoading:false,
    isError:true
   }
  }

  
  case types.KIDS_DATA_LOADING: {
   return{
    ...state,
    isLoading:true,
    isError:false
   }
  }
  case types.KIDS_DATA_SUCCESS: {
   return{
    ...state,
    kids:payload,
    isLoading:false,
    isError:false
   }
  }
  case types.KIDS_DATA_FAILURE: {
   return{
    ...state,
    isLoading:false,
    isError:true
   }
  }

  default : {
   return state
  }
 }
}

export  {reducer}