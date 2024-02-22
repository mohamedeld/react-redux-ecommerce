import { useEffect, useState } from "react";
import avatar from "../../images/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createNewBrand } from "../../redux/actions/brands";
export function useCreateBrand(){
  const [name,setName] = useState('');
  const [img,setImg] = useState(avatar);
  const [selectedImage,setSelectedImage] = useState(null);
  const [isLoading,setIsLoading] = useState(true);
  const [isPress,setIsPress] = useState(false);

  const dispatch = useDispatch();
  const responseData = useSelector(state=> state.allBrands.brands);
  
  useEffect(()=>{
    if(isLoading === false){
      setName('');
      setImg(avatar);
      setSelectedImage(null);
      setIsPress(false);
      setIsLoading(true);
      if(responseData.status === 201){
        toast.success("data added successfully");
      }else{
        toast.error("something went wrong")
      }
    }
  },[isLoading])
  function changeName(event){
    setName(event.target.value);
  }
  function changeImage(event){
    if(event.target.files && event.target.files[0]){
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedImage(event.target.files[0]);
    }
  }
  async function handleSubmit(event){
    event.preventDefault();
    if(name === "" || selectedImage === null){
      toast.warn("please enter your data");
      return;
    }
    const formData = new FormData();
    formData.append("name",name);
    formData.append("image",selectedImage);

    setIsLoading(true);
    setIsPress(true);
    await dispatch(createNewBrand(formData));
    setIsLoading(false); 
  }

  return [isLoading,isPress,name,changeImage,changeName,handleSubmit,img]
}