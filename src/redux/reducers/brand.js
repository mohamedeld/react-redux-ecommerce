import { ALL_BRANDS, GET_ERROR } from "../type";

const initialState = {
  brands:[]
}

export function brandReducer(state=initialState,action){
  switch(action.type){
    case ALL_BRANDS:
      return {
        ...state,
        brands:action.payload
      }
    case GET_ERROR:
      return{
        brands:action.payload
      }
    default:
      return state;
  }
}