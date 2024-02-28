import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { login } from '../../redux/actions/auth';
import { useNavigate } from 'react-router-dom';

export default function userLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [loading,setLoading] = useState(true);

  function handleEmail(event){
    setEmail(event.target.value);
  }
  function handlePassword(event){
    setPassword(event.target.value);
  }

  async function handleSubmit(event){
    event.preventDefault();

    if(email ==="" || password ===""){
      toast.warn("please enter your data");
    }
    
    setLoading(true);
    await dispatch(login({
      email,
      password
    }))
    setLoading(false);
  }
  const response = useSelector(state=> state.allAuths.loginUser);
  useEffect(()=>{
    if(loading === false){
      if(response){
        if(response.data.token){
          localStorage.setItem("token",response.data.token);
          localStorage.setItem("user",JSON.stringify(response.data.data));
          toast.success("login successfully");
          setEmail("");
          setPassword("");
          setTimeout(()=>{
            navigate("/")
          })
        }else{
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
        if(response.status === 500){
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          toast.error("Incorrect email or password")
        }
      }

    }
  },[loading])
  return [loading ,email,handleEmail,password,handlePassword,handleSubmit]
}
