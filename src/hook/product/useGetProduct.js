import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getProductByPage } from "../../redux/actions/product";

export function useGetProducts(){
  const dispatch = useDispatch();
  const [isLoading,setIsLoading] = useState(true);
  useEffect(()=>{
    setIsLoading(true);
    dispatch(getProduct());
    setIsLoading(false);
  },[]);

  const response = useSelector(state=> state.allProducts.products);
  let pageCount = 0;
  async function getPage(page){
   await dispatch(getProductByPage(page,6));
  }
  try{
    if(response && response.pagingationResult){
      pageCount = response.pagingationResult.numberOfPages
    }
    
  }catch(err){
    console.log(err.message);
  }
  
  return [response,pageCount,getPage,isLoading];
}

