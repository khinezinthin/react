import { Loader, PasswordInput, TextInput } from '@mantine/core'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../redux/api/authApi'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/services/authSlice'
import { useForm } from "@mantine/form";

const Login = () => {
  // const [email,setEmail] = useState("khine@gmail.com")
  // const [password,setPassword] = useState("khine1234")
  const [login, {isLoading}] = useLoginMutation()
  const nav = useNavigate()
  const dispatch = useDispatch()

  const form = useForm({
    initialValues: {
      email: "admin@gmail.com",
      password: "admin123",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (value.length < 8 ? 'password must have at least 8 letters' : null),
    },
  });

  // const loginHandler = async(e)=>{
  //   try{
  //     e.preventDefault()
  //     const user = {email,password}
  //     // console.log(user);
  //     const {data} = await login(user)
  //     // console.log(data);
  //     dispatch(addUser({user:data?.user, token:data?.token}))
  //     if(data?.success){
  //       nav('/');
  //     }
  //   }catch(error){
  //     console.log(error);
  //   }
  // }
  return (
    <div className='flex justify-center h-screen items-center '>
      {/* <form onSubmit={loginHandler} className=' border border-blue-500 shadow w-96 p-7 flex flex-col gap-5'>
        <h1 className=' text-2xl'>Log In</h1>
        <TextInput value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email'/>
        <PasswordInput value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Password'/>
        <div className='flex text-gray-500 gap-1'>
          <p>If you don't have an account ?</p>
          <Link to={'/register'}>
            <p className=' cursor-pointer'>Register</p>
          </Link>
        </div>
        <button type='submit' className=' bg-blue-500 px-4 py-1 rounded'>Sign In</button>
      </form> */}

      <form onSubmit={form.onSubmit(async(values) =>{
        try{
          const {data} = await login(values)
          // console.log(data);
          dispatch(addUser({user: data?.user, token: data?.token}))
          if(data?.success){
            nav("/")
          }
        }catch(error){
          console.log(error);
        }
      }
        )} className=' border border-blue-500 shadow w-96 p-7 flex flex-col gap-5'>
        <h1 className=' text-2xl'>Log In</h1>
        <TextInput {...form.getInputProps('email')} placeholder='Email'/>
        <PasswordInput {...form.getInputProps('password')} placeholder='Password'/>
        <div className='flex text-gray-500 gap-1'>
          <p>If you don't have an account ?</p>
          <Link to={'/register'}>
            <p className=' cursor-pointer'>Register</p>
          </Link>
        </div>
        <button disabled={isLoading && true} type='submit' className=' bg-blue-500 px-4 py-1 rounded'>
        {isLoading ? (<Loader className=" block mx-auto" color="gray" size="sm"/> ) : "Sign in"}
        </button>
        
      </form>
    </div>
  )
}

export default Login