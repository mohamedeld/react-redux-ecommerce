import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getProductByPage } from "../../redux/actions/product";

export function useGetProducts(){
  const dispatch = useDispatch();
  const [isLoading,setIsLoading] = useState(true);
  useEffect(()=>{
    dispatch(getProduct());
  },[]);

  const response = useSelector(state=> state.allProducts.products);
  let pageCount = 0;
  if(response && response.pagingationResult){
    pageCount = response.pagingationResult.numberOfPages
  }
  function getPage(page){
    dispatch(getProductByPage(page,6));
  }
  return [response,pageCount,getPage];
}

