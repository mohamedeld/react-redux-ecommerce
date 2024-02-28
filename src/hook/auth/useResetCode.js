import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { resendCode } from '../../redux/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function useResetCode() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [resetCode,setResetCode] = useState();
  const [loading,setLoading] = useState(true);
  const res = useSelector(state=> state.allAuths.resetCode);
  useEffect(()=>{
    if(loading === false){
      if(res){
        if(res.data.status.toLowerCase() === "success"){
          toast.success("كود التفعيل صحيح");
          setTimeout(()=>{
            navigate("/user/update-password")
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

  function handleResetCode(event){
    setResetCode(event.target.value);
  }
  async function handleSubmit(event){
    if(resetCode === ""){
      toast.warn("Please enter your reset code");
      return;
    }
    setLoading(true);
    await dispatch(resendCode({
      resetCode
    }))
    setLoading(false);
  }
  return [resetCode,handleResetCode,handleSubmit]
}
