import { GET_ERROR, LOGIN, REGISTER } from "../type";

const initialState = {
  registerUser:[],
  loginUser:[],
  loading:true
}
export default function AuthReducer(state=initialState,action){
  switch(action.type){
    case REGISTER:
      return{
        ...state,
        registerUser:action.payload,
        loading:false
      }
    case LOGIN:
      return {
        ...state,
        loginUser:action.payload,
        loading:false
      }
    default:
      return state;
  }
}