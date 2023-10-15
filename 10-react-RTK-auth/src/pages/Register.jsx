import { Loader, PasswordInput, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/api/authApi";
import { useForm } from "@mantine/form";

const Register = () => {
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [password_confirmation, setPassword_confirmation] = useState();
  const [register, { isLoading }] = useRegisterMutation();
  const nav = useNavigate();

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    },

    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (value.length < 8 ? 'password must have at least 8 letters' : null),
      password_confirmation: (value,values) => (value === values.password ?  null : "password wrong"),
    },
  });

  // const registerHandler = async(e)=>{
  //   try{
  //     e.preventDefault()
  //     const user = {name,email,password,password_confirmation}
  //     // console.log(user);
  //     const {data} = await register(user)
  //     console.log(data);
  //     if(data?.success){
  //       nav('/login')
  //     }
  //   }catch(error){
  //     console.log(error);
  //   }
  // }
  return (
    <div className="flex justify-center h-screen items-center ">
      {/* <form onSubmit={registerHandler} className=' border border-blue-500 shadow w-96 p-7 flex flex-col gap-5'>
        <h1 className=' text-2xl'>Register</h1>
        <TextInput value={name} onChange={(e)=> setName(e.target.value)} placeholder='Name'/>
        <TextInput value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email'/>
        <PasswordInput value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Password'/>
        <PasswordInput value={password_confirmation} onChange={(e)=> setPassword_confirmation(e.target.value)} placeholder='Confirmed Password'/>
        <div className='flex text-gray-500 gap-1'>
          <p>If you have already an account ?</p>
          <Link to={'/login'}>
            <p className=' cursor-pointer'>LogIn</p>
          </Link>
        </div>
        <button type='submit' className=' bg-blue-500 px-4 py-1 rounded'>Sign Up</button>
      </form> */}

      <form onSubmit={form.onSubmit(async(values) => {
        try{
          const {data} = await register(values)
          // console.log(data);
          if(data?.success){
            nav('/login')
          }
        }catch(error){
          console.log(error);
        }
      })} className=' border border-blue-500 shadow w-96 p-7 flex flex-col gap-5'>
        <h1 className=' text-2xl'>Register</h1>
        <TextInput  {...form.getInputProps('name')} placeholder='Name'/>
        <TextInput   {...form.getInputProps('email')} placeholder='Email'/>
        <PasswordInput  {...form.getInputProps('password')} placeholder='Password'/>
        <PasswordInput  {...form.getInputProps('password_confirmation')}placeholder='Confirmed Password'/>
        <div className='flex text-gray-500 gap-1'>
          <p>If you have already an account ?</p>
          <Link to={'/login'}>
            <p className=' cursor-pointer'>LogIn</p>
          </Link>
        </div>
        <button disabled={isLoading && true} type='submit' className=' bg-blue-500 px-4 py-1 rounded'>
        {isLoading ? (<Loader className=" block mx-auto" color="gray" size="sm"/> ) : "Sign up"}
        </button>
        
      </form>

      
    </div>
  );
};

export default Register;
