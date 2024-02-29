import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { addReview } from '../../redux/actions/review';
import { toast } from 'react-toastify';

export default function useAddReview(id) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [rateText,setRateText] = useState('');
  const [rateValue,setRateValue] = useState(0);
  const [loading,setLoading] = useState(true);
  const [isLoading,setIsLoading] = useState(true);
  const res = useSelector(state=>state.allReviews.createReview);
  useEffect(()=>{
    if(loading === false){
      if(res){
      if(res.status && res.status === 201){
        toast.success('your review added successfully');
        setRateText('');
        setRateValue(0);
      }
       if(res.status &&res.status === 400){
        toast.error(`${res.data.errors[0].msg}`);
        return;
       }
        if(res.status && res.status === 403){
          toast.error("you are not allowed to perform this action");
          return;
        }
      }
    }
  },[loading])
  function handleRateText(event){
    setRateText(event.target.value);
  }
  function handleRateValue(val){
    setRateValue(val);
  }
  
  let user="";
  try{
    if(localStorage.getItem("user") !== null){
      user = JSON.parse(localStorage.getItem("user"));
      
    }

  }catch(err){
    console.log(err);
  }
 
  async function handleSubmit(event){
    event.preventDefault();
    if(rateText === ""){
      toast.warn("please insert your rate");
      return;
    }
    if(rateValue <=2){
      toast.warn("rating should be greater than 2");
      return;
    }

    setLoading(true);
    await dispatch(addReview(id,{
      review:rateText,
      rating:rateValue,
    }))
    setLoading(false);
  }
  return [rateText,handleRateText,rateValue,handleRateValue,user,handleSubmit];
}
