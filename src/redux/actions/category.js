
import { useCreateData, useCreateDataWithoutImage } from "../../hooks/useCreateData";
import { useGetData } from "../../hooks/useGetData";
import { ALL_CATEGORIES, CREATE_CATEGORY, CREATE_SUBCATEGORYBYCATEGORY, GET_CATEGORY_BY_ID, GET_ERROR, GET_SUBCATEGORYBYCATEGORY } from "../type";
export const  allCategories = (limit)=> async (dispatch)=>{
  try{
    const categories = await useGetData(`/api/v1/categories?limit=${limit}`);
    dispatch({
      type:ALL_CATEGORIES,
      payload:categories
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

export const getCategoryById = (id)=> async (dispatch)=>{
  try{
    const response = await useGetData(`/api/v1/categories/${id}`);
    dispatch({
      type:GET_CATEGORY_BY_ID,
      payload:response
    })
  }catch(err){
    dispatch({
      type:GET_ERROR,
      payload:"Error "+err
    })

  }
} 