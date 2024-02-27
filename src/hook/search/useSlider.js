import { useEffect, useState } from 'react'

import { getBrands } from '../../redux/actions/brands';
import { useDispatch, useSelector } from 'react-redux';
import { allCategories } from '../../redux/actions/category';
import { useGetProduct } from '../product/useGetProduct';

export default function useSlider() {
  const dispatch = useDispatch();
  
  // const [loading,setLoading] = useState(true);
  const [categoryChecked,setCategoryChecked] = useState([]);
  const [brandChecked,setBrandChecked] = useState([]);
  const [priceFrom,setPriceFrom] = useState(0);
  const [priceTo,setPriceTo] = useState(0);
  const [,,,,handleProd] = useGetProduct()
  async function handleFirst(){
  //  setLoading(true);
   await dispatch(allCategories());
   await dispatch(getBrands());
  //  setLoading(false);
   
  }
  useEffect(()=>{
    handleFirst();
  },[])
  const allCats = useSelector(state=> state.allCategories.categories);
  const allBrand = useSelector(state=> state.allBrands.brands)
  let queryCategory ="";
  function handleCategory(event){
    let val = event.target.value;
    if(val === "0"){
      setCategoryChecked([])
    }else{
      if(event.target.checked === true){
        setCategoryChecked([...categoryChecked,val])
      }else if(event.target.checked === false){
        setCategoryChecked(categoryChecked.filter(e=> e !== val));
      }
    }
  }
  function getQuery(){
    queryCategory = categoryChecked.map(val=> "category[in][]="+val).join("&");
    localStorage.setItem("catChecked",queryCategory)
    setTimeout(()=>{
      handleProd();
    },1000);
  }
  useEffect(()=>{
    getQuery();
  },[categoryChecked])
  let queryBrand ="";
  function handleBrand(event){
    let val = event.target.value;
    if(val === "0"){
      setBrandChecked([])
    }else{
      if(event.target.checked === true){
        setBrandChecked([...brandChecked,val])
      }else if(event.target.checked === false){
        setBrandChecked(categoryChecked.filter(e=> e !== val));
      }
    }
  }
  function getQueryBrand(){
    queryBrand = brandChecked.map(val=> "brand[in][]="+val).join("&")
    localStorage.setItem("checkbrand",queryBrand);
    setTimeout(()=>{
      handleProd();
    },1000) 
  }
  useEffect(()=>{
    getQueryBrand();
  },[brandChecked])
  let categories=[];
  try{
    if(allCats && allCats.data){
      categories = allCats.data.data;
    }
  }catch(err){console.log(err.message)}
  let brands=[];
  try{
    if(allBrand && allBrand.data){
      brands = allBrand.data.data;
    }
  }catch(err){console.log(err.message)}
  
  function handlePriceTo(event){
    localStorage.setItem("priceTo",event.target.value)
    setPriceTo(event.target.value)
  }
  function handlePriceFrom(event){
    localStorage.setItem("priceFrom",event.target.value)
    setPriceFrom(event.target.value);
  }
  useEffect(()=>{
    setTimeout(()=>{
      handleProd();
    },1000) 
  },[priceFrom,priceTo])

  return [categories,brands,handleCategory,handleBrand,priceTo,priceFrom,handlePriceFrom,handlePriceTo];
}

