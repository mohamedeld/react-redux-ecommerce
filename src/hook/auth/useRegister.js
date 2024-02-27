
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { register } from '../../redux/actions/auth';

export default function useRegister() {
  const dispatch = useDispatch();
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [phone,setPhone] = useState('');
  const [loading,setLoading] = useState(true);
  function handleName(event){
    setName(event.target.value);
  }
  function handleEmail(event){
    setEmail(event.target.value);
  }
  function handlePassword(event){
    setPassword(event.target.value);
  }
  function handleConfirmPassword(event){
    setConfirmPassword(event.target.value);
  }
  function handlePhone(event){
    setPhone(event.target.value);
  }
 async function handleSubmit(event){
    event.preventDefault();
    if(name === "" || name.length < 2 || email === "" || password ==="" || phone ==="" || phone.length <=10){
      toast.warn("please enter your data");
      return; 
    }
    if(password !== confirmPassword){
      toast.warn("password does not match");
      return;
    }
    
    setLoading(true);
    await dispatch(register({
      name,
      email,
      password,
      passwordConfirm:confirmPassword,
      phone
    }));
    setLoading(false);
  }
  const response = useSelector(state=> state.allAuths.registerUser)
  useEffect(()=>{
    if(loading === false){
      setName('');
      setEmail('');
      setPhone('');
      setPassword('');
      setConfirmPassword('');
      if(response){
        if(response.status === 201){
          toast.success("registered successfully")
        }else{
          toast.error("something went wrong");
        }
      }
      setLoading(true);
    }
  },[loading])
  return [name,handleName,email,handleEmail,password,handlePassword,confirmPassword,handleConfirmPassword,phone,handlePhone,handleSubmit]
}
