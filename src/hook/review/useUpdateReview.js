import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getReviewById, updateReviewById } from '../../redux/actions/review';
import { toast } from 'react-toastify';

export default function useUpdateReview(id) {
  const dispatch = useDispatch();
  const [editLoading,setEditLoading] = useState(true);
  async function getOneReview(){
    setEditLoading(true);
    await dispatch(getReviewById(id))
    setEditLoading(false);
  }
  useEffect(()=>{
    getOneReview();
  },[])
  
  const res = useSelector(state=> state.allReviews.oneReview);
  let review=[];
  try{
    if(editLoading === false && res){
      review = res.data.data;
    }
  }catch(err){console.log(err)}
  
  const [newRateValue,setNewRateValue] = useState(review.review || '');
  const [rateStar,setRateStar]= useState(review.rating || 0);
  const [newLoading,setNewLoading] = useState(true);
  useEffect(() => {
    if (review.review) {
      setNewRateValue(review.review);
    }
    if (review.rating) {
      setRateStar(review.rating);
    }
  }, [review]);
  function handleNewRateValue(event){
    setNewRateValue(event.target.value);
  }
  function handleSetRating(val){
    setRateStar(val);
  }

  async function handleEditSubmit(event){
    event.preventDefault();
    if(rateStar <= 2){
      toast.warn("please rating should be greater than 2");
      return;
    }
    if(newRateValue === ""){
      toast.warn("please enter your data correclty");
      return;
    }
    setNewLoading(true);
    await dispatch(updateReviewById(id,{
      review:newRateValue,
      rating:rateStar
    }))
    setNewLoading(false);
  }
  const response = useSelector(state=> state.allReviews.updateReview);
  useEffect(()=>{
    if(newLoading === false){
      if(response){
        if(response.status && response.status == 201){
          toast.success("تم التعديل بنجاح")
          setTimeout(()=>{
            window.location.reload(false);
          },1000);
        }else{
          toast.error("something went wrong");
          return;
        }
      }
    }
  },[newLoading])
  
 
  
  return [review,editLoading,handleEditSubmit,handleSetRating,handleNewRateValue,rateStar,newRateValue]
}
