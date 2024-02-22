import { combineReducers } from "redux";
import allCategories from "./category";
import { brandReducer } from "./brand";

const rootReducer = combineReducers({
  allCategories:allCategories,
  allBrands:brandReducer
});

export default rootReducer;