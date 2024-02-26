import { useEffect, useState } from "react";
import { useGetProducts } from "../product/useGetProduct";

export default function useSearchNav() {
  const [search,setSearch] = useState(
    function(){
      const storedValue = localStorage.getItem("word");
      return storedValue !== null ? storedValue : "";
    }
  );
  const [response,pageCount,getPage,isLoading,handleProd] = useGetProducts();
  function handleSearch(event){
    localStorage.setItem("word",event.target.value);
    setSearch(event.target.value);
  }

  useEffect(()=>{
    setTimeout(()=>{
      handleProd();
    },1000)
  },[search])

  return [search,handleSearch]
}
