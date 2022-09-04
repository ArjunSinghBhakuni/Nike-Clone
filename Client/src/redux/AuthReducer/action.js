import axios from "axios";
import * as types from "./actiontype";

export const signupUser = (params) => (dispatch) => {
  dispatch({ type: types.SIGNUP_LOADING });

  return axios
    .post("/user/signup", params)
    .then((r) => dispatch({ type: types.SIGNUP_SUCCESS, payload: r.message }))
    .catch((err) => dispatch({ type: types.LOGIN_FAILURE }));
};

export const loginUser = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_LOADING });

  return axios({
    method: "post",
    url: "/user/login",

    data: payload,
  })
    .then((r) => {
      console.log(r.data.token)
      dispatch({ type: types.LOGIN_SUCCESS, payload: r.data.token });
      localStorage.setItem("token", r.data.token);
    })
    .catch((e) => dispatch({ type: types.LOGIN_FAILURE }));
};
