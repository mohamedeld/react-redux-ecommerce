import { ALL_BRANDS, GET_BRAND_BY_ID, GET_ERROR } from "../type";

const initialState = {
  brands:[],
  brand:[]
}

export function brandReducer(state=initialState,action){
  switch(action.type){
    case ALL_BRANDS:
      return {
        ...state,
        brands:action.payload
      }
    case GET_BRAND_BY_ID:
      return{
        ...state,
        brand:action.payload
      }
    case GET_ERROR:
      return{
        brands:action.payload
      }
    default:
      return state;
  }
}