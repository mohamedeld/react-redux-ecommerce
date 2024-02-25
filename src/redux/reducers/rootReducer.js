import { combineReducers } from "redux";
import allCategories from "./category";
import { brandReducer } from "./brand";
import { subCategoryReducer } from "./subCategory";
import { productReducer } from "./product";

const rootReducer = combineReducers({
  allCategories:allCategories,
  allBrands:brandReducer,
  allSubCategories:subCategoryReducer,
  allProducts:productReducer
});

export default rootReducer;