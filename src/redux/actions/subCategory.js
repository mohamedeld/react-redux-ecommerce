import { useCreateDataWithoutImage } from "../../hooks/useCreateData";
import { useGetData } from "../../hooks/useGetData";
import { CREATE_SUBCATEGORY, GET_ERROR, GET_SUBCATEGORY } from "../type";


export const getSubCategory = ()=> async(dispatch) =>{
  try{
    const response = await useGetData('/api/v1/subcategories');
    dispatch({
      type:GET_SUBCATEGORY,
      payload:response
    })
  }catch(err){
    dispatch({
      type:GET_ERROR,
      payload:"Error "+ err
    })
  }
}
export const createSubCategory = (data)=> async(dispatch) =>{
  try{
    const response = await useCreateDataWithoutImage('/api/v1/subcategories',data);
    dispatch({
      type:CREATE_SUBCATEGORY,
      payload:response
    })
  }catch(err){
    dispatch({
      type:GET_ERROR,
      payload:"Error "+ err
    })
  }
}