
import { useCreateData } from "../../hooks/useCreateData";
import { useGetData } from "../../hooks/useGetData";
import { ALL_CATEGORIES, CREATE_CATEGORY, GET_ERROR } from "../type";
export const  allCategories = (limit)=> async (dispatch)=>{
  try{
    const categories = await useGetData(`/api/v1/categories?limit=${limit}`);
    dispatch({
      type:ALL_CATEGORIES,
      payload:categories.data
    })
  }catch(err){
    dispatch({
      type:GET_ERROR,
      payload:"Error "+err
    })

  }
}
export const  allCategoriesByPage = (page)=> async (dispatch)=>{
  try{
    const categories = await useGetData(`/api/v1/categories?limit=3&page=${page}`);
    dispatch({
      type:ALL_CATEGORIES,
      payload:categories.data
    })
  }catch(err){
    dispatch({
      type:GET_ERROR,
      payload:"Error "+err
    })

  }
}
export const  createCategory = (data)=> async (dispatch)=>{
  try{
    const categories = await useCreateData('/api/v1/categories',data);
    dispatch({
      type:CREATE_CATEGORY,
      payload:categories,
      loading:true
    })
  }catch(err){
    dispatch({
      type:GET_ERROR,
      payload:"Error "+err
    })

  }
}