import { ADD_REVIEW, DELETE_REVIEW, GET_REVIEW, GET_REVIEW_BY_ID, UPDATE_REVIEW_BY_ID } from "../type";

const initialState = {
  createReview:[],
  reviews:[],
  deleteReviews:[],
  oneReview:[],
  updateReview:[]
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
    case GET_REVIEW_BY_ID:
      return {
        ...state,
        oneReview:action.payload
      }
    case UPDATE_REVIEW_BY_ID:
      return {
        ...state,
        updateReview:action.payload
      }
    case DELETE_REVIEW:
      return{
        ...state,
        deleteReviews:action.payload
      }
    default:
      return state;
  }
}