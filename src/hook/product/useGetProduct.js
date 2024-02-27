import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByQueryString } from "../../redux/actions/product";

export function useGetProduct(){
  const dispatch = useDispatch();
  const [isLoading,setIsLoading] = useState(true);
  
  let limit=4;
  async function handleProd() {
      let word="";
      if(localStorage.getItem("word") !== null){
        word = localStorage.getItem("word");
      }
      let queryCat="";
      if(localStorage.getItem("catChecked")!== null){
        queryCat = localStorage.getItem("catChecked");
      }
      sortFn();
      setIsLoading(true);
      await dispatch(getProductByQueryString(`sort=${sort}&limit=${limit}&keyword=${word}&${queryCat}`));
      setIsLoading(false);
      
    }
  
  useEffect(()=>{
    
    handleProd();
  },[dispatch]);

  const response = useSelector(state=> state.allProducts.products);
  let pageCount = 0;
  async function getPage(page){
    let word="";
    if(localStorage.getItem("word") !== null){
      word = localStorage.getItem("word");
    }
    let queryCat="";
      if(localStorage.getItem("catChecked")!== null){
        queryCat = localStorage.getItem("catChecked");
      }
    sortFn();
   await dispatch(getProductByQueryString(`sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${queryCat}`));
  }
  try{
    if(isLoading === false && response && response.data.paginationResult){
      pageCount = response.data.paginationResult.numberOfPages
    }
    
  }catch(err){
    console.log(err.message);
  }
  let sortType="",sort;
  
  function sortFn(){
    if(localStorage.getItem("sortType") !== null){
      sortType = localStorage.getItem("sortType");
    }
    if(sortType === "less to more"){
      sort = "+price";
    }
    else if(sortType ==="more to less"){
      sort = "-price";
    }
    else if(sortType ===""){
      sort = "";
    }
    else if(sortType ==="best seller"){
      sort = "+sold";
    }
    else if(sortType ==="highest rated"){
      sort = "-ratingsQuantity";
    }
  }
  
  return [response,pageCount,getPage,isLoading,handleProd];
}

