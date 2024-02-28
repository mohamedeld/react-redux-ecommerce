import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { updatePassword } from '../../redux/actions/auth';
import { useNavigate } from 'react-router-dom';

export default function useUpdatePassword() {
  const dispatch = useDispatch();
  const navigate=  useNavigate();
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const[loading,setLoading] = useState('');
  function handlePassword(event){
    setPassword(event.target.value);
  }
  function handleConfirmPassword(event){
    setConfirmPassword(event.target.value);
  }
  const res = useSelector(state=> state.allAuths.updatedPasswords);
  useEffect(()=>{
    if(loading === false){
      if(res){
        if(res.data.status.toLowerCase() === "success"){
          toast.success("كود التفعيل صحيح");
          setTimeout(()=>{
            navigate("/login")
          })
        }
        if(res.data.status.toLowerCase() === "fail"){
          toast.error("كود التفعيل خطا او انتهيت الصلاحية")
          return;
        }
        if(res.data.status.toLowerCase() === "error"){
          toast.error("هناك خطأ ما حاول لاحقا")
          return;
        }
      }
    }
  },[loading]);
  async function handleSubmit(event){
    event.preventDefault();
    if(password === ""){
      toast.warn("please enter your password");
    return; 
    }
    if(password !== confirmPassword){
      toast.warn("password does not confirmed");
      return;
    }

    setLoading(true);
    await dispatch(updatePassword({
      password,
    }))
    setLoading(false);
  }

  return [password,handleConfirmPassword,confirmPassword,handlePassword,handleSubmit]
}
