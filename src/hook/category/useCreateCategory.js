import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import avatar from "../../images/avatar.png";
import { createCategory } from "../../redux/actions/category";
export function useCreateCategory(){
  const [img , setImg] = useState(avatar);
  const [name  , setName ] = useState('');
  const [selectedImage,setSelectedImage] = useState(); 
  const [isLoading,setIsLoading] = useState(true); 
  const [isPress,setIsPress] = useState(false);
  
  const dispatch = useDispatch();
  const res = useSelector(state=> state.allCategories.categories);
  useEffect(()=>{
    if(isLoading === false){
      setSelectedImage(null);
      setImg(avatar);
      setName('');
      setIsLoading(true);
      setIsPress(false);
      if(res){
        toast.success("item added successfully")
      }else{
        toast.error("something went wrong");
      }
    }
  },[isLoading])
  
  function changeImage(event){
    if(event.target.files && event.target.files[0]){
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedImage(event.target.files[0]);
    }
  }
  function changeName(event){
      setName(event.target.value);
  }
  async function handleSubmit(event){
    event.preventDefault();
    const formData = new FormData();
    if(name.length < 3 || name ==="" || selectedImage === null){
      
      return;
    }
    formData.append('name',name);
    formData.append('image',selectedImage);
    setIsLoading(true);
    setIsPress(true);
    await dispatch(createCategory(formData));
    
    setIsLoading(false);
    console.log(formData)
  }

  return [img,name,changeImage,changeName,handleSubmit,isPress,isLoading];
}