import { useEffect, useState } from "react";
import { useGetProduct } from "../product/useGetProduct";

export default function useSearchNav() {
  const [search,setSearch] = useState('');
  const [,,,,handleProd] = useGetProduct();
  function handleSearch(event){
    localStorage.setItem("word",event.target.value);
    setSearch(event.target.value);
  }

  useEffect(()=>{
    setTimeout(()=>{
      handleProd();
    },1000)
  },[search])

  return [search,handleSearch];
}
