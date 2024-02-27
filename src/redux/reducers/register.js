import { GET_ERROR, REGISTER } from "../type";

const initialState = {
  registerUser:[],
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
    
    default:
      return state;
  }
}