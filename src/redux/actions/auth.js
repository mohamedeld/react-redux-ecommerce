import { useCreateDataWithoutImage } from "../../hooks/useCreateData"
import { GET_ERROR, LOGIN, REGISTER } from "../type"


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