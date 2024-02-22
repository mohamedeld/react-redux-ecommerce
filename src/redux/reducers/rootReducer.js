import { combineReducers } from "redux";
import allCategories from "./category";
import { brandReducer } from "./brand";
import { subCategoryReducer } from "./subCategory";

const rootReducer = combineReducers({
  allCategories:allCategories,
  allBrands:brandReducer,
  allSubCategories:subCategoryReducer
});

export default rootReducer;