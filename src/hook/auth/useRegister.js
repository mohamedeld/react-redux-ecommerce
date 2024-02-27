
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { register } from '../../redux/actions/auth';
import { useNavigate } from 'react-router-dom';

export default function useRegister() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(true);
  function handleName(event) {
    setName(event.target.value);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }
  function handleConfirmPassword(event) {
    setConfirmPassword(event.target.value);
  }
  function handlePhone(event) {
    setPhone(event.target.value);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    if (name === "" || name.length < 2 || email === "" || password === "" || phone === "" || phone.length <= 10) {
      toast.warn("please enter your data");
      return;
    }
    if (password !== confirmPassword) {
      toast.warn("password does not match");
      return;
    }

    setLoading(true);
    await dispatch(register({
      name,
      email,
      password,
      passwordConfirm: confirmPassword,
      phone
    }));
    setLoading(false);
  }
  const response = useSelector(state => state.allAuths.registerUser)
  useEffect(() => {
    if (loading === false) {

      if (response) {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          toast.success("registered successfully")
          setName('');
          setEmail('');
          setPhone('');
          setPassword('');
          setConfirmPassword('');
          
          setTimeout(()=>{
            navigate('/login');
          },2000);
        }
        if (response.data.errors) {
          if (response.data.errors[0].msg === "E-mail already in use") {
            toast.error(`Email already in use`);
          }
          if (response.data.errors[0].msg === "accept only egypt phone numbers") {
            toast.error(`Accept only egypt phone numbers`);
          }
          if (response.data.errors[0].msg === "must be at least 6 chars") {
            toast.error(`password must be at least 6 chars`);
          }
        }
        console.log(response)
      }
      
    }
  }, [loading])
  return [name, handleName, email, handleEmail, password, handlePassword, confirmPassword, handleConfirmPassword, phone, handlePhone, handleSubmit]
}
