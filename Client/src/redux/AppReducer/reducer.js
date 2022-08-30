import * as types from './actiontype'
 

const intialState = {
 products:[],
 men:[],
 women:[],
 kids:[],
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

  default : {
   return state
  }
 }
}

export  {reducer}