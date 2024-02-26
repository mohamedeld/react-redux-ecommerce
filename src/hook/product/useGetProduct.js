import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getProductByPage, getProductByQueryString } from "../../redux/actions/product";

export function useGetProducts(){
  const dispatch = useDispatch();
  const [isLoading,setIsLoading] = useState(true);
  
  let limit=4;
  async function handleProd() {
    let word="";
    if(localStorage.getItem("word") !== null){
      word = localStorage.getItem("word");
    }
    setIsLoading(true);
    await dispatch(getProductByQueryString(`limit=${limit}&keyword=${word}`));
    setIsLoading(false);
  }
  useEffect(()=>{
    handleProd();
  },[]);

  const response = useSelector(state=> state.allProducts.products);
  let pageCount = 0;
  async function getPage(page){
    let word="";
    if(localStorage.getItem("word") !== null){
      word = localStorage.getItem("word");
    }
   await dispatch(getProductByQueryString(`limit=${limit}&page=${page}&keyword=${word}`));
  }
  try{
    if(isLoading === false && response && response.data.paginationResult){
      pageCount = response.data.paginationResult.numberOfPages
    }
    
  }catch(err){
    console.log(err.message);
  }
  
  return [response,pageCount,getPage,isLoading,handleProd];
}

