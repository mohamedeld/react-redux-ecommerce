import { useCreateDataWithoutImage } from "../../hooks/useCreateData";
import { useDeleteData } from "../../hooks/useDeleteData";
import { useGetLoggedUser } from "../../hooks/useGetData";
import { ADD_TO_WHISTLIST, DELETE_FROM_WHISTLIST, GET_ALL_WISHLIST } from "../type";


export const addProductToWhishlist = (productId)=> async (dispatch)=>{
  try{
    const response = await useCreateDataWithoutImage(`/api/v1/wishlist`,productId);
    dispatch({
      type:ADD_TO_WHISTLIST,
      payload:response
    })
  }catch(err){
    dispatch({
      type:ADD_TO_WHISTLIST,
      payload:err.response
    })
  }
}
export const removeProductFromWhishlist = (id)=> async (dispatch)=>{
  try{
    const response = await useDeleteData(`/api/v1/wishlist/${id}`);
    dispatch({
      type:DELETE_FROM_WHISTLIST,
      payload:response
    })
  }catch(err){
    dispatch({
      type:DELETE_FROM_WHISTLIST,
      payload:err.response
    })
  }
}

export const getAllProductWishlists = ()=> async (dispatch)=>{
  try{
    const response = await useGetLoggedUser(`/api/v1/wishlist`);
    dispatch({
      type:GET_ALL_WISHLIST,
      payload:response
    })
  }catch(err){
    dispatch({
      type:GET_ALL_WISHLIST,
      payload:err?.response
    })
  }
}
