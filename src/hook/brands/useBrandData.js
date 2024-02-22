import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrands, getBrandsByPage } from "../../redux/actions/brands";

export function useBrandData(){
  const dispatch = useDispatch();
  const [isLoading,setIsLoading] = useState(true);
  useEffect(()=>{
    setIsLoading(true);
    dispatch(getBrands());
    setIsLoading(false);
  },[]);
  const responseData = useSelector(state=> state.allBrands.brands);
  let pageCount = 0;
  if(isLoading ===false && responseData && responseData.paginationResult){
    pageCount = responseData.paginationResult.numberOfPages;
  }
  function getPage(page){
    dispatch(getBrandsByPage(page));
  }
  return [isLoading,responseData,pageCount,getPage];
}