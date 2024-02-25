import { ALL_CATEGORIES, CREATE_CATEGORY, GET_ERROR, GET_SUBCATEGORYBYCATEGORY } from "../type";

const initialState = {
  categories:[],
  loading:true
}

export default function allCategories(state=initialState,action){
  switch(action.type){
    case ALL_CATEGORIES:
      return {
        ...state,
        categories:action.payload,
        loading:false
      }
    case CREATE_CATEGORY:
      return {
        ...state,
        categories:action.payload,
        loading:false
      }
    
    case GET_ERROR:
      return {
        loading:true,
        categories:action.payload
      }
    default:
      return state;
  }
}

