import { useCreateDataWithoutImage } from "../../hooks/useCreateData"
import { useEditData, useEditDataWithoutImage } from "../../hooks/useEditData";
import { useGetData, useGetLoggedUser } from "../../hooks/useGetData";
import { FORGET_PASSWORD, GET_ERROR, GET_ME, LOGIN, REGISTER, RSEND_CODE, UPDATE_PASSWORD } from "../type"


export const register =(formData)=>async (dispatch)=>{
  try{
    const response = await useCreateDataWithoutImage('/api/v1/auth/signup',formData);
    dispatch({
      type:REGISTER,
      payload:response,
      loading:true
    })
  }catch(error){
    dispatch({
      type:REGISTER,
      payload:error.response
    })
  }
}
export const login = (data)=>async (dispatch)=>{
  try{
    const response = await useCreateDataWithoutImage('/api/v1/auth/login',data);
    dispatch({
      type:LOGIN,
      payload:response,
      loading:true
    })
  }catch(err){
    dispatch({
      type:LOGIN,
      payload:err.response
    })
  }
}
export const getMe = ()=> async (dispatch)=>{
  try{
    const response = await useGetLoggedUser('/api/v1/users/getMe');
    dispatch({
      type:GET_ME,
      payload:response
    })
  }catch(err){
    dispatch({
      type:GET_ME,
      payload:err.response
    })
  }
}
export const forgetPassword = (data)=> async (dispatch)=>{
  try{
    const response = await useCreateDataWithoutImage('/api/v1/auth/forgotPasswords',data);
    dispatch({
      type:FORGET_PASSWORD,
      payload:response
    })
  }catch(err){
    dispatch({
      type:FORGET_PASSWORD,
      payload:err.response
    })
  }
}
export const resendCode = (code)=> async (dispatch
  )=>{
  try{
    const response = await useCreateDataWithoutImage('/api/v1/auth/verifyResetCode',code);
    dispatch({
      type:RSEND_CODE,
      payload:response
    })
  }catch(err){
    dispatch({
      type:RSEND_CODE,
      payload:err.response
    })
  }
}
export const updatePassword = (data)=> async (dispatch)=>{
  try{
    const response = await useEditDataWithoutImage('/api/v1/auth/resetPassword',data);
    dispatch({
      type:UPDATE_PASSWORD,
      payload:response
    })
  }catch(err){
    dispatch({
      type:UPDATE_PASSWORD,
      payload:err.response
    })
  }
}