import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { addProductToWhishlist, removeProductFromWhishlist } from '../../redux/actions/wishlist';
import { useDispatch, useSelector } from 'react-redux';
import favoff from "../../images/fav-off.png"
import favon from "../../images/fav-on.png"
const useWishList = (id,favouriteProducts) => {
  const dispatch = useDispatch();
  const [favImg, setFavImg] = useState(favoff);
  const [loading,setLoading] = useState(true);
  const [loadingRemove,setLoadingRemove] = useState(true)
  let isFav =favouriteProducts?.some(prod => prod === id)
  const [fav,setFav] = useState(isFav);

  useEffect(()=>{
    setFav(favouriteProducts?.some(prod => prod === id));
  },[favouriteProducts])

  function handleIsFav() {
    if(fav){
      handleDelete();
    }else{
      handleSubmit();
    }
  }
  
  const res = useSelector(state => state.allWhistlist.addWhistList);
  const response = useSelector(state=> state?.allWhistlist?.deleteFromWishList)
  async function handleSubmit() {
    try{

      await dispatch(addProductToWhishlist({
        productId:id
      }));
      setLoading(false);
    }catch(error){
      console.log(error)
      toast.error(error?.message)
      toast.error(error?.response?.data?.message);
      setLoading(false);
      
    }
  }
  useEffect(()=>{
    if(loading === false){
      if(res && res?.status === 200){
        toast.success("item added successfully to wishlist");
      }else if(res && res?.status === 401){
        toast.warn("you are not authorized");
      }
      setFav(true);
      setFavImg(favon);
      setLoading(true);
    }
  },[loading])
  const handleDelete = async()=>{
    try{  

      await dispatch(removeProductFromWhishlist(id))
      setLoadingRemove(false);
    }catch(error){
      console.log(error);
      toast.error(error?.message);
      toast.error(error?.response?.data?.message);
      setLoadingRemove(false);
    }
  }
  useEffect(() => {
    if (fav) {
      setFavImg(favon);
    } else {
      setFavImg(favoff);
      // handleSubmit();
    }
  }, [fav]);
  useEffect(()=>{
    if(loadingRemove===false){
      if(response && response?.status === 200){
        toast.success("product removed from whishlist");
      }else if(response && response?.status === 401){
        toast.warn("you are not authorized");
      }
      setFav(false);   
      setFavImg(favoff);
      setLoadingRemove(true);
    }
  },[loadingRemove])
  return [handleIsFav,favImg]
}

export default useWishList