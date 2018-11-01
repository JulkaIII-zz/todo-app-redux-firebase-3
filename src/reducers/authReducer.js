import {
  FETCH_USER,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from "../actions/types";

const initState = {
  authError: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || null;
    case SIGNUP_SUCCESS:
      console.log("signup success");
      return { ...state, authError: null };
    case SIGNUP_ERROR:
      console.log("signup error", action.err.message);
      return { ...state, authError: action.err.message };
    case LOGIN_SUCCESS:
      console.log("login success");
      return { ...state, authError: null };
    case LOGIN_ERROR:
      console.log("login error", action.err.message);
      return { ...state, authError: action.err.message };
    default:
      return state;
  }
};
