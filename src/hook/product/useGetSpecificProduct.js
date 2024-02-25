import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById, getProductsByCategory } from "../../redux/actions/product";
import { getCategoryById } from "../../redux/actions/category";
import { getBrandById } from "../../redux/actions/brands";


export default function useGetSpecificProduct(id) {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProductById(id))
  },[])
  const responseData = useSelector(state=> state.allProducts.oneProduct);
  let item;
  if(responseData && responseData.data){
    item = responseData.data.data; 
  }else{
    item = []
  }
  useEffect(()=>{
    if(item.category){
      dispatch(getCategoryById(item.category));
    }
    if(item.brand){
      dispatch(getBrandById(item.brand));
    }
    if(item.category){
      dispatch(getProductsByCategory(item.category));
    }
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
  
  return [item,cat,brand,productsLike]
}
