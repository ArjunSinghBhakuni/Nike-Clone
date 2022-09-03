import axios from "axios";
import * as types from "./actiontype";

const signup = (paload = (dispatch) => {
  dispatch({ type: types.SIGNUP_LOADING });

  axios
    .post("/singup", { payload })
    .then(dispatch({ type: types.SIGNUP_SUCCESS, payload: r.data }))
    .catch(dispatch({ type: types.LOGIN_FAILURE }));
});

const login = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_LOADING });

  return axios({
    method: "post",
    url: "/api/login",

    data: payload,
  })
    .then((r) => dispatch({ type: types.LOGIN_SUCCESS, payload: r.data }))
    .catch((e) => dispatch({ type: types.LOGIN_FAILURE }));
};
export { login };
