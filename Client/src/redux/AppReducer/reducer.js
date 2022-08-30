import * as types1 from './actiontype'
 

const intialState = {
 mens:[],
 isLoading : false,
 isError : false
}

const reducer =(state = intialState,{type,payload})=>{

 switch(type){

  case types1.MEN_DATA_LOADING: {
   return{
    ...state,
    isLoading:true,
    isError:false
   }
  }
  case types1.MEN_DATA_SUCCESS: {
   return{
    ...state,
    mens:payload,
    isLoading:false,
    isError:false
   }
  }
  case types1.MEN_DATA_FAILURE: {
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