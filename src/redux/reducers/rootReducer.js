import { combineReducers } from "redux";
import allCategories from "./category";
import { brandReducer } from "./brand";
import { subCategoryReducer } from "./subCategory";
import { productReducer } from "./product";
import AuthReducer from "./register";

const rootReducer = combineReducers({
  allCategories:allCategories,
  allBrands:brandReducer,
  allSubCategories:subCategoryReducer,
  allProducts:productReducer,
  allAuths:AuthReducer
});

export default rootReducer;