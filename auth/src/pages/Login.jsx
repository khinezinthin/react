// import React from 'react'
// import { TextInput, PasswordInput } from '@mantine/core';
// import { useForm } from '@mantine/form';
// import { Link, useNavigate } from 'react-router-dom';
// import { useLoginMutation } from '../redux/api/authApi';
// import { useDispatch } from 'react-redux';
// import { addUser } from '../redux/services/authSlice';

// const Login = () => {
//   const [login, {isLoading}] = useLoginMutation();
//   const dispatch = useDispatch();
//   const nav = useNavigate();
//     const form = useForm({
//         initialValues: {
//           email: 'admin@gmail.com',
//           password: 'admin123'
//         },
    
//         validate: {
//           email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
//           password: (value) => (value.length > 5 ? null : "password must be 8"),
//         },
//       });
//   return (
//     <div className=' flex justify-center items-center h-screen'>
//         <form onSubmit={form.onSubmit(async(values) => {
//             console.log(values);
//             try{
//               const {data} = await login(values);
//               console.log(data);
//               dispatch(addUser({user: data?.user, token: data?.token}))
//               if(data?.success){
//                 nav('/')
//               }
//             }catch(error){
//               console.log(error);
//             }
//         })}
//         className=' flex-col flex gap-5 border-green-500 border w-96 p-3'>
//         <h1 className=' text-green-500 text-xl text-center'>Log in</h1>
//         <TextInput placeholder="email" {...form.getInputProps('email')}/>
//         <PasswordInput placeholder="password" {...form.getInputProps('password')}/>
//         <button disabled={isLoading && true} className=' bg-green-500 px-3 py-1'>Sign In</button>
//         </form>
//     </div>
//   )
// }

// export default Login

import React, { useState } from 'react'
import { useLoginMutation } from '../redux/api/authApi';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [login] = useLoginMutation();
  const [email,setEmail] = useState("admin@gmail.com");
  const [password,setPassword] = useState("asdffdsa");
  const nav = useNavigate()

  const loginHandler = async(e)=>{
    e.preventDefault();
    try{
      const user = {email,password};
    // console.log(user);
    const {data} = await login(user);
    // console.log(data);
    if(data?.token){
      nav("/", {state: {token: data?.token} });
    }
    }catch(e){
      console.log(e.message);
    }

  }
  return (
    <div>
      <form onSubmit={loginHandler}>
        <input style={{border: "solid black 1px"}} value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
        <input style={{border: "solid black 1px"}} value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' />
        <button>Log in</button>
      </form>
    </div>
  )
}

export default Login