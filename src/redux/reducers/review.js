import { ADD_REVIEW, DELETE_REVIEW, GET_REVIEW } from "../type";

const initialState = {
  createReview:[],
  reviews:[],
}
export function reviewReducer(state=initialState,action){
  switch(action.type){
    case ADD_REVIEW:
      return{
        ...state,
        createReview:action.payload
      }
    case GET_REVIEW:
      return{
        ...state,
        reviews:action.payload
      }
    case DELETE_REVIEW:
      return{
        ...state,
        reviews:action.payload
      }
    default:
      return state;
  }
}