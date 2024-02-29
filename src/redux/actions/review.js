import { useCreateDataWithoutImage } from "../../hooks/useCreateData"
import { useDeleteData } from "../../hooks/useDeleteData";
import { useGetLoggedUser } from "../../hooks/useGetData";
import { ADD_REVIEW, DELETE_REVIEW, GET_REVIEW } from "../type";

export const addReview = (id,data)=> async (dispatch)=>{
  try{
    const response = await useCreateDataWithoutImage(`/api/v1/products/${id}/reviews`,data);
    dispatch({
      type:ADD_REVIEW,
      payload:response
    })
  }catch(err){
    dispatch({
      type:ADD_REVIEW,
      payload:err.response
    })
  }
}
export const getReviews = (id,page,limit)=> async (dispatch)=>{
  try{
    const response = await useGetLoggedUser(`/api/v1/products/${id}/reviews?page=${page}&limit=${limit}`);
    dispatch({
      type:GET_REVIEW,
      payload:response
    })
  }catch(err){
    dispatch({
      type:GET_REVIEW,
      payload:err.response
    })
  }
}
export const deleteReview = (id)=> async (dispatch)=>{
  try{
    const response = await useDeleteData(`/api/v1/reviews/${id}`);
    dispatch({
      type:DELETE_REVIEW,
      payload:response
    })
  }catch(err){
    dispatch({
      type:DELETE_REVIEW,
      payload:err.response
    })
  }
}