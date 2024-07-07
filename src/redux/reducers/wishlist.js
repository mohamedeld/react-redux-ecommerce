import { ADD_TO_WHISTLIST, DELETE_FROM_WHISTLIST, GET_ALL_WISHLIST } from "../type";

const initialState = {
  addWhistList: [],
  deleteFromWishList: [],
  allWishlists:[]
}

export function whistListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_WHISTLIST:
      return {
        ...state,
        addWhistList: action.payload
      }
    case DELETE_FROM_WHISTLIST:
      return {
        ...state,
        deleteFromWishList: action.payload
      }
    case GET_ALL_WISHLIST:
      return {
        ...state,
        allWishlists:action.payload
      }
    default:
      return state;
  }
}
