import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteReview } from '../../redux/actions/review';
import useModal from '../../utils/useModal';

export default function useDeleteReview(user,id) {
  const dispatch = useDispatch();
  const [loading,setLoading] = useState(true);
  const [show,handleClose,handleShow] = useModal();

  const [isUser,setIsUser] = useState(false);
  let loggedUser="";
  if(localStorage.getItem("user") !== null){
    loggedUser = JSON.parse(localStorage.getItem("user"));
  }
  useEffect(()=>{
    if(loggedUser && user){
      if(loggedUser._id === user._id){
        setIsUser(true);
      }
    }
  },[])
  
  async function handleDelete(){
    setLoading(true);
    await dispatch(deleteReview(id));
     setLoading(false);
    handleClose();
  }
  const res = useSelector(state=> state.allReviews.deleteReviews);
  useEffect(()=>{
    if(loading === false){
      if(res){
        if(res === ""){
          toast.success("removed successfully");
        }else{
          toast.error("something went wrong");
          return;
        }
      }
    }
  },[loading])

  return [isUser,handleDelete,show,handleClose,handleShow]
}
