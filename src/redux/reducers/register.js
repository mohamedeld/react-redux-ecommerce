import { FORGET_PASSWORD, GET_ERROR, GET_ME, LOGIN, REGISTER, RSEND_CODE, UPDATE_PASSWORD } from "../type";

const initialState = {
  registerUser: [],
  loginUser: [],
  currentUser: [],
  forgetPasswords: [],
  resetCode: [],
  updatedPasswords:[],
  loading: true
}
export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        registerUser: action.payload,
        loading: false
      }
    case LOGIN:
      return {
        ...state,
        loginUser: action.payload,
        loading: false
      }
    case GET_ME:
      return {
        ...state,
        currentUser: action.payload,
        loading: false
      }
    case FORGET_PASSWORD:
      return {
        ...state,
        forgetPasswords: action.payload, 
        loading: false
      }
    case RSEND_CODE:
      return {
        ...state,
        resetCode: action.payload
      }
    case UPDATE_PASSWORD:
      return {
        ...state,
        updatedPasswords:action.payload
      }
    default:
      return state;
  }
}