import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryById } from "../../redux/actions/category";

export default function useGetCategory(id){
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCategoryById(id))
  },[]);

  const res = useSelector(state=> state.allCategories.category);
  console.log(res)
  return [res]
}