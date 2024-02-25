import { useCreateData } from "../../hooks/useCreateData"
import { useGetData } from "../../hooks/useGetData";
import { CREATE_PRODUCT, GET_ERROR, GET_PRODUCTS, GET_PRODUCTS_BY_ID } from "../type";

export const createProduct = (formData)=> async (dispatch)=>{
  try{
    const products = await useCreateData('/api/v1/products',formData);
    dispatch({
      type:CREATE_PRODUCT,
      payload:products
    })
  }catch(err){
    dispatch({
      type:GET_ERROR,
      payload:"Error "+err
    })
  }
}

export const getProduct = () => async(dispatch)=>{
  try{
    const products = await useGetData('/api/v1/products');
    dispatch({
      type:GET_PRODUCTS,
      payload:products
    })
  }catch(err){
    dispatch({
      type:GET_ERROR,
      payload:"Error "+err
    })
  }
}

export const getProductByPage = (page) => async(dispatch)=>{
  try{
    const products = await useGetData(`/api/v1/products?limit=3&page=${page}`);
    dispatch({
      type:GET_PRODUCTS,
      payload:products
    })
  }catch(err){
    dispatch({
      type:GET_ERROR,
      payload:"Error "+err
    })
  }
}
export const getProductById = (id)=> async(dispatch)=>{
  try{
    const response = await useGetData(`/api/v1/products/${id}`);
    dispatch({
      type:GET_PRODUCTS_BY_ID,
      payload:response
    })
  }catch(err){
    dispatch({
      type:GET_ERROR,
      payload:"Error "+err
    })
  }
}