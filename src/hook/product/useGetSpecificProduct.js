import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById, getProductsByCategory } from "../../redux/actions/product";
import { getCategoryById } from "../../redux/actions/category";
import { getBrandById } from "../../redux/actions/brands";


export default function useGetSpecificProduct(id) {
  const dispatch = useDispatch();
  const [loading,setLoading] = useState(true);
  async function getProds(){
    setLoading(true);
    await dispatch(getProductById(id))
    setLoading(false);
  }
  useEffect(()=>{
    getProds();
  },[])
  const responseData = useSelector(state=> state.allProducts.oneProduct);
  let item;
  if(loading === false && responseData && responseData.data){
    item = responseData.data.data; 
  }else{
    item = []
  }
  async function getAllItems(){
    if(item.category){
     await dispatch(getCategoryById(item.category));
    }
    if(item.brand){
     await dispatch(getBrandById(item.brand));
    }
    if(item.category){
     await dispatch(getProductsByCategory(item.category));
    }
  }
  useEffect(()=>{
    getAllItems();
  },[item])
  const oneCategory = useSelector(state=> state.allCategories.category);
  const oneBrand = useSelector(state=> state.allBrands.brand);
  const similarProds = useSelector(state=> state.allProducts.similiarProducts);
  let cat;
  if(oneCategory && oneCategory.data){
    cat = oneCategory.data.data.name; 
  }else{
    cat=[];
  }
  let brand;
  if(oneBrand && oneBrand.data){
    brand = oneBrand.data.data.name; 
  }else{
    brand=[];
  }
  let productsLike;
  if(similarProds && similarProds.data){
    productsLike = similarProds;
  }else{
    productsLike=[];
  }
  
  return [item,cat,brand,productsLike,loading]
}
