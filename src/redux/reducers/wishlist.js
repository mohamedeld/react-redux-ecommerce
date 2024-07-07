import { ADD_TO_WHISTLIST, DELETE_FROM_WHISTLIST } from "../type";

const initialState = {
  addWhistList: [],
  deleteFromWishList: []
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
    default:
      return state;
  }
}
