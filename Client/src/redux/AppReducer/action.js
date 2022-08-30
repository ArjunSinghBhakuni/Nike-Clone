import * as types from "./actiontype"
import axios from "axios";

const getMenData = ()=>(dispatch)=>{

 dispatch({ type: types.MEN_DATA_LOADING });
  axios
    .get("/mens")
    .then((r) => dispatch({ type: types.MEN_DATA_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: types.MEN_DATA_FAILURE}));


}
export {getMenData}