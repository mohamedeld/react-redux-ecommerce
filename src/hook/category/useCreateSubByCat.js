import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allCategories, createSubCategoryByCategory } from "../../redux/actions/category";
import { toast } from "react-toastify";
import { createSubCategory } from "../../redux/actions/subCategory";


export default function useCreateSubByCat() {
  const dispatch = useDispatch();
  const [name,setName] = useState('');
  const [isLoading,setIsLoading] = useState(true);
  const [catId,setCatId] = useState('0');
  const [loading,setLoading] = useState(true);
  async function getCategories(){
    setLoading(true);
    await dispatch(allCategories());
    setLoading(false);
  }

  useEffect(()=>{
    getCategories();
  },[]);
 
  const response = useSelector(state=> state.allCategories.categories);
  
  const res = useSelector(state=> state.allSubCategories.subCategory);
  
  useEffect(()=>{
    if(isLoading === false){
      setName('');
      setCatId('0');
      console.log(res.status)
      if(res.status === 201){
        toast.success('data added successfully');
      }else{
        toast.error('something went wrong');
      }
      setIsLoading(true);
    }
  },[isLoading])
  
  function handleName(event){
    setName(event.target.value);
  }
  function handleCategoryId(event){
    setCatId(event.target.value);
  }
  async function handleSubmit(event){
    event.preventDefault();
    if(!navigator.onLine){
      toast.warn("your are offline");
      return;
    }
    if(name ==="" || name.length <3 || catId ===  '0'){
      toast.warn("Please enter your data");
      return;
    }    
    setIsLoading(true);
    await dispatch(createSubCategory({
      name:name,
      category:catId
    }));
    setIsLoading(false);
  }

  return [isLoading,response,name,catId,handleName,handleCategoryId,handleSubmit,loading];
}
