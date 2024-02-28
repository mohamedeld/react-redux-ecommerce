import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { forgetPassword } from '../../redux/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function useForgetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  const res = useSelector(state => state.allAuths.forgetPasswords);
  useEffect(() => {
    if (loading === false) {
      if (res) {
        
        if (res.data.status.toLowerCase() === "success") {
          toast.success(res.data.message);
         setTimeout(()=>{
          navigate('/user/restcode')
         },2000);
        }
        if (res.data.status.toLowerCase() === "fail") {
          toast.error(res.data.message)
          return;
        }
        if(res.data.status.toLowerCase() === "error"){
          toast.error(res.data.message);
          return;
        }
      }
    }
  }, [loading])
  async function handleSubmit(event) {
    event.preventDefault();
    if (email === "") {
      toast.error("please enter your email");
    }

    setLoading(true);
    await dispatch(forgetPassword({ email }));
    setLoading(false);
  }
  return [email, handleEmail, handleSubmit]
}
