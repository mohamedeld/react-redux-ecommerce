import { useEffect, useState } from "react";
import {useDispatch, useSelector } from "react-redux";
import {allCategories, allCategoriesByPage } from "../../redux/actions/category";


export function useGetAllCategories(dataFn){
  const [isLoading,setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect( ()=>{ 
    setIsLoading(true);
    dispatch(dataFn);
    setIsLoading(false);
  },[]);
  
  const responseData = useSelector(state=> state.allCategories.categories);
  let pageCount;
  if(isLoading === false && responseData.paginationResult){
    pageCount = responseData.paginationResult.numberOfPages
  }
  function getPage(page){
    dispatch(allCategoriesByPage(page));
  }

  return [responseData,isLoading,pageCount,getPage];
}