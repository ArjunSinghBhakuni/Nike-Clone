import * as types from "./actiontype";

const intialState = {
  isAuth: localStorage.getItem("token") ?  true :false,
  token: localStorage.getItem("token") || "",
  isLoading: false,
  isError: false,
};

const reducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case types.SIGNUP_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.SIGNUP_SUCCESS: {
      return {
        ...state,

        isLoading: true,
        isError: false,
      };
    }
    case types.SIGNUP_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    case types.LOGIN_LOADING: {
      // console.log("loading")
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.LOGIN_SUCCESS: {
      // console.log("payload", payload)
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload,
        isError: false,
      };
    }
    case types.LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        token: "",
        isAuth: false,
      };
    }
    case types.LOGOUT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        token: payload,
        isAuth: false,
      };
    }
    default: {
      return state;
    }
  }
};

export { reducer };
