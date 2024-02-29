import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../redux/actions/review';
export default function useGetReviews(id) {
  const dispatch = useDispatch();
  const [loading,setLoading] = useState(true);

  async function getAllReviews(){
    setLoading(true);
    await dispatch(getReviews(id,1,10))
    setLoading(false);
  }

  useEffect(()=>{
    getAllReviews();
  },[])

  const res = useSelector(state=> state.allReviews.reviews);
  let reviews=[];
  try{
    if(loading === false && res){
      reviews = res.data;
    }
  }catch(err){
    console.log(err);
  }
  let user="";
  try{
    if(localStorage.getItem("user") !== null){
      user = JSON.parse(localStorage.getItem("user"));
    }
  }catch(err){console.log(err)}

  let pageCount=0;
  try{
    if(loading === false && res && res.paginationResult){
      pageCount = res.paginationResult.numberOfPages
    }
  }catch(err){console.log(err)}
  async function getPage(page){
    await dispatch(getAllReviews(id,page,10));
  }
  return [reviews,loading,user,pageCount,getPage];
}
