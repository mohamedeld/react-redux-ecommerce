import { CREATE_PRODUCT, DELETE_PRODUCT_BY_ID, GET_ERROR, GET_PRODUCTS, GET_PRODUCTS_BY_ID, GET_PRODUCT_BY_CATEGORY } from "../type";

const initialState = {
  products: [],
  oneProduct:[],
  similiarProducts:[],
  loading:true
}
export function productReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_PRODUCT:
      return {
        ...state,
        products: action.payload,
        loading:false
      }
    case GET_PRODUCTS:
      return {
        ...state,
        products:action.payload,
        loading:false
      }
    case GET_PRODUCTS_BY_ID:
      return {
        ...state,
        oneProduct:action.payload,
        loading:false
      }
    case GET_PRODUCT_BY_CATEGORY:
      return {
        ...state,
        similiarProducts:action.payload,
        loading:false
      }
    case DELETE_PRODUCT_BY_ID:
      return {
        ...state,
        products:action.payload,
        loading:false
      }
    case GET_ERROR:
      return {
        loading:true,
        products: action.payload
      }
    default:
      return state;
  }
}