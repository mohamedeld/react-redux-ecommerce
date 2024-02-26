import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBrands } from '../../redux/actions/brands';
import { allCategories } from '../../redux/actions/category';
import { getSubCatByCategory } from '../../redux/actions/subCategory';
import { toast } from 'react-toastify';
import { createProduct } from '../../redux/actions/product';
import {dataURLtoFile} from '../../utils/convertImage';

export function useCreateProduct(){
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const [name,setName] = useState('');
  const [description,setDescription] = useState('');
  const [quantity,setQuantity] = useState('');
  const [priceBefore,setPriceBefore] = useState('');
  const [priceAfter,setPriceAfter] = useState('');
  const [category,setCategory] = useState('');
  const [subCat,setSubCat] = useState('');
  const [selectedSubCat,setSelectedSubCat] = useState([]);
  const [brand,setBrand] = useState('');
  const [colors,setColors] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [isActive,setIsActive] = useState(false);
  const [options,setOptions] = useState([]);
  const [loading,setLoading] = useState(true);
  const [loadOption,setLoadOption] = useState(true);
  const [loadSub,setLoadSub] = useState(true);
  async function handleFirst(){
    setLoading(true);
    await dispatch(allCategories());
    await dispatch(getBrands());
    setLoading(false);
  }
  useEffect(()=>{
    handleFirst();
  },[])


  const allCats = useSelector(state=> state.allCategories.categories);
  const allBrand = useSelector(state=> state.allBrands.brands)
  async function  handleCategory(event){
    let selectedCategory = event.target.value;
    
    if(selectedCategory !== "0"){
      setLoadSub(true);
      await dispatch(getSubCatByCategory(selectedCategory))
      setLoadSub(false);
     }
     
     if(selectedCategory !== "0"){
      setCategory(prevCategory => {
        return (selectedCategory !== "0" && selectedCategory !== undefined) ? selectedCategory : prevCategory;
      });
     }

     
  
     
  }
  const subCategories = useSelector(state=> state.allSubCategories.subCategory);
  useEffect(()=>{
    
    if(category !== "0"){
      if(subCategories.data){
        setLoadOption(true);
        setOptions(subCategories.data.data);
        setLoadOption(false);
      }
    }
  },[category,subCategories])
  
  const res = useSelector(state=> state.allProducts.products);
  useEffect(()=>{
    if(isLoading === false){
      
      setName('');
      setDescription('');
      setPriceAfter('');
      setPriceBefore('');
      setQuantity('');
      setColors('');
      setBrand('');
      if(res){
        if(res.status ===201){
          toast.success('item added successfully');
        }else{
          toast.error("something went wrong");
        }
      }
    }
  },[isLoading])
  function handleColors(color){
    setColors([...colors,color.hex]);
    setIsActive(!isActive);
  }
  function removeColors(index){
    setColors(colors=> colors.filter((item)=> item !== index))
  }
  function handleName(event){
    setName(event.target.value);
  }
  function handleDescription(event){
    setDescription(event.target.value);
  }
  function handleQuantity(event){
    setQuantity(event.target.value);
  }
  function handlePriceBefore(event){
    setPriceBefore(event.target.value);
  }
  function handlePriceAfter(event){
    setPriceAfter(event.target.value);
  }
  function handleSubCat(event){
    setSubCat(event.target.value);
  }
  function handleBrand(event){
    setBrand(event.target.value);
  }
  
  function handleIsActive(){
    setIsActive(!isActive)
  }
  
  function onSelect(selectedList){
    setSelectedSubCat(selectedList)
  }
  function onRemove(selectedList){
    setSelectedSubCat(selectedList)
  }
 
  async function handleSubmit(event){
    event.preventDefault();
    if(!navigator.onLine){
      toast.warn("you are offline");
    }
    
    
    if(name === "" || description ==="" || priceBefore < 0 || priceAfter <0 || category === "undefined" || category === "0" ||  quantity <0 ){
      toast.warn("please enter your data");
      return;
    }
    if(+priceAfter > +priceBefore){
      toast.warn("price after discount should be greather than before");
      return;
    }
    
   
      let itemImages = Array.from(Array(Object.keys(images).length).keys()).map((item,index)=>{  
          return dataURLtoFile(images[index],Math.random()+".png");
      })    
    
     let imgCover = dataURLtoFile(images[0],Math.random()+".png");
    
    
    const formData = new FormData();
    formData.append("title",name);
    formData.append("description",description);
    formData.append("imageCover",imgCover);
    formData.append("category",category);
    formData.append("price",priceAfter);
    formData.append("quantity",quantity);
    
    if(itemImages.length > 0){
      itemImages.map(img=> formData.append("images",img));
    }else{
      toast.warn("please select product images")
      return;
    }
    formData.append("brand",brand);
    if(colors){
      colors.map(color=> formData.append("availableColors",color));
     
    }else{
      toast.warn("please select product colors")
      return;
    }
    if(selectedSubCat){
      selectedSubCat.map(sub=> formData.append('subcategory',sub._id));
    }else{
      toast.warn("please select product selectedSubCat")
      return;
    }

   
    setIsLoading(true);
    await dispatch(createProduct(formData));
    setIsLoading(false);  
    console.log(formData)
  }
  
  return [images,setImages,name,handleName,description,handleDescription,priceBefore,handlePriceBefore,priceAfter,handlePriceAfter,category,handleCategory,brand,handleBrand,colors,handleColors,quantity,handleQuantity,allCats,allBrand,isActive,handleIsActive,removeColors,options,onSelect,onRemove,handleSubmit,loading,loadOption,loadSub]
}