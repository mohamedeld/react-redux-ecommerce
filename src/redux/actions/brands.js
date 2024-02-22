import { useCreateData } from "../../hooks/useCreateData";
import { useGetData } from "../../hooks/useGetData"
import { ALL_BRANDS, GET_ERROR } from "../type";


export const getBrands = (limit) => async (dispatch)=>{
  try{
    const brands = await useGetData(`/api/v1/brands?limit=${limit}`);
    dispatch({
      type:ALL_BRANDS,
      payload:brands
    })
  }catch(err){
    dispatch({
      type:GET_ERROR,
      payload:"Error "+err
    })
  }

}
export const getBrandsByPage = (page) => async (dispatch)=>{
  try{
    const brands = await useGetData(`/api/v1/brands?limit=3&page=${page}`);
    dispatch({
      type:ALL_BRANDS,
      payload:brands
    })
  }catch(err){
    dispatch({
      type:GET_ERROR,
      payload:"Error "+err
    })
  }

}
export const createNewBrand = (formData) => async (dispatch)=>{
  try{
    const brands = await useCreateData(`/api/v1/brands`,formData);
    dispatch({
      type:ALL_BRANDS,
      payload:brands
    })
  }catch(err){
    dispatch({
      type:GET_ERROR,
      payload:"Error "+err
    })
  }

}