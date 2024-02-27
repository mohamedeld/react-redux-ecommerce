import { useEffect, useState } from 'react'

import { getBrands } from '../../redux/actions/brands';
import { useDispatch, useSelector } from 'react-redux';
import { allCategories } from '../../redux/actions/category';
import { useGetProduct } from '../product/useGetProduct';

export default function useSlider() {
  const dispatch = useDispatch();
  
  // const [loading,setLoading] = useState(true);
  const [categoryChecked,setCategoryChecked] = useState([]);
  const [brandChecked,setBrandChecked] = useState('');
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
  
  return [categories,brands,handleCategory,handleBrand];
}

