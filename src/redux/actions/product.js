import { useCreateData } from "../../hooks/useCreateData"
import { useDeleteData } from "../../hooks/useDeleteData";
import { useGetData } from "../../hooks/useGetData";
import { CREATE_PRODUCT, DELETE_PRODUCT_BY_ID, GET_ERROR, GET_PRODUCTS, GET_PRODUCTS_BY_ID, GET_PRODUCT_BY_CATEGORY } from "../type";

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

export const getProductByPage = (page,limit) => async(dispatch)=>{
  try{
    const products = await useGetData(`/api/v1/products?page=${page}&limit=${limit}`);
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
export const deleteProductById = (id)=> async(dispatch)=>{
  try{
    const response = await useDeleteData(`/api/v1/products/${id}`);
    dispatch({
      type:DELETE_PRODUCT_BY_ID,
      payload:response
    })
  }catch(err){
    dispatch({
      type:GET_ERROR,
      payload:"Error "+err
    })
  }
}
export const getProductsByCategory = (category)=> async(dispatch)=>{
  try{
    const response = await useGetData(`/api/v1/products?category=${category}`);
    dispatch({
      type:GET_PRODUCT_BY_CATEGORY,
      payload:response
    })
  }catch(err){
    dispatch({
      type:GET_ERROR,
      payload:"Error "+err
    })
  }
}