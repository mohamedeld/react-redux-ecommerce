import { CREATE_SUBCATEGORY, GET_ERROR, GET_SUBCATEGORY, GET_SUBCATEGORYBYCATEGORY } from "../type";

const initialState={
  subCategory:[]
}


export function subCategoryReducer(state=initialState,action){
  switch(action.type){
    case GET_SUBCATEGORY:
      return {
        ...state,
        subCategory:action.payload
      }
    case CREATE_SUBCATEGORY:
      return{
        ...state,
        subCategory:action.payload
      }
      case GET_SUBCATEGORYBYCATEGORY:
        return {
          ...state,
          subCategory:action.payload
        }
    case GET_ERROR:
      return{
        subCategory:action.payload
      }
    default:
      return state;
  }
}
