import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBrands } from '../../redux/actions/brands';
import { allCategories } from '../../redux/actions/category';
import { getSubCatByCategory } from '../../redux/actions/subCategory';
import { toast } from 'react-toastify';
import { createProduct, editProductById, getProductById } from '../../redux/actions/product';
import {dataURLtoFile} from '../../utils/convertImage';
import { convertUrlToFile } from '../../utils/convertUrlToFile';

export function useEditProduct(id){
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
  const [getCat,setGetCat] = useState(true);
  useEffect(()=>{
    async function run(){
      setGetCat(true);
      await dispatch(allCategories());
      await dispatch(getBrands());
      await dispatch(getProductById(id));
      setGetCat(false);
    }
    run();
  },[])


  const allCats = useSelector(state=> state.allCategories.categories);
  const allBrand = useSelector(state=> state.allBrands.brands)
  const product = useSelector(state=> state.allProducts.oneProduct);
  
  
  useEffect(()=>{
    
    if(getCat === false){
      if(category !== "0"){
        async function run(){
          await dispatch(getSubCatByCategory(category))
        }
        run();
      }
    }
  },[category]);
  
  const subCategories = useSelector(state=> state.allSubCategories.subCategory);
  useEffect(()=>{
    if(subCategories.data){
      setOptions(subCategories.data.data);
    }
  },[subCategories])
  const res = useSelector(state=> state.allProducts.updateProducts);
  console.log(res);
  useEffect(()=>{
    if(isLoading === false){
      if(res){
        if(res.status === 200){
          toast.success('item updated successfully');
        }else{
          toast.error("something went wrong");
        }
      }
    }
  },[isLoading])
  useEffect(()=>{
    if(product && product.data){
      setImages(product.data.data.images)
      setName(product.data.data.title);
      setDescription(product.data.data.description);
      setPriceBefore(product.data.data.price);
      setQuantity(product.data.data.quantity);
      setCategory(product.data.data.category);
      setBrand(product.data.data.brand);
      setColors(product.data.data.availableColors)

      
    }
  },[product])
  
   function  handleCategory(event){
    setCategory(event.target.value)
  }
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
    console.log(images[0])
    let imgCover;
    if(images[0].length <= 1000){
      imgCover =  await convertUrlToFile(images[0]);
    }else{
     imgCover = dataURLtoFile(images[0],Math.random()+".png");
    }
    

   let itemImages=[];
   for (let index = 0; index < images.length; index++) {
    if (images[index].length <= 1000) {
        const val = await convertUrlToFile(images[index]);
        itemImages.push(val);
    } else {
        itemImages.push(dataURLtoFile(images[index], Math.random() + ".png"));
    }
} 
    
    const formData = new FormData();
    formData.append("title",name);
    formData.append("description",description);
    formData.append("category",category);
    formData.append("price",priceAfter);
    formData.append("quantity",quantity);
    setTimeout(()=>{
      formData.append("imageCover",imgCover);
      itemImages.map(img=> formData.append("images",img));
    },1000)
    
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

   setTimeout(async ()=>{
    setIsLoading(true);
    await dispatch(editProductById(id,formData));
    setIsLoading(false); 
   },1000)
       }
  
  return [images,setImages,name,handleName,description,handleDescription,priceBefore,handlePriceBefore,priceAfter,handlePriceAfter,category,handleCategory,brand,handleBrand,colors,handleColors,quantity,handleQuantity,allCats,allBrand,isActive,handleIsActive,removeColors,options,onSelect,onRemove,handleSubmit,isLoading]
}