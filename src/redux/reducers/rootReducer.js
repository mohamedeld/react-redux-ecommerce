import { combineReducers } from "redux";
import allCategories from "./category";
import { brandReducer } from "./brand";
import { subCategoryReducer } from "./subCategory";
import { productReducer } from "./product";
import AuthReducer from "./register";
import { reviewReducer } from "./review";
import { whistListReducer } from "./wishlist";
const rootReducer = combineReducers({
  allCategories:allCategories,
  allBrands:brandReducer,
  allSubCategories:subCategoryReducer,
  allProducts:productReducer,
  allAuths:AuthReducer,
  allReviews:reviewReducer,
  allWhistlist:whistListReducer
});

export default rootReducer;