import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/actions/product";

export function useGetProducts(){
  const dispatch = useDispatch();
  const [isLoading,setIsLoading] = useState(true);
  useEffect(()=>{
    dispatch(getProduct());
  },[]);

  const response = useSelector(state=> state.allProducts.products);
  
  return [response];
}

