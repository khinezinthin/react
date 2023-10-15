// import React from 'react'
// import { TextInput, PasswordInput } from '@mantine/core';
// import { useForm } from '@mantine/form';
// import { Link, useNavigate } from 'react-router-dom';
// import { useRegisterMutation } from '../redux/api/authApi';

// const Register = () => {
//     const [register, {isLoading}] = useRegisterMutation();
//     const nav = useNavigate();
//     const form = useForm({
//         initialValues: {
//           name: '',
//           email: '',
//           password: '',
//           password_confirmation: '',
//         },
    
//         validate: {
//           name: (value) => (value.length > 2 ? null : "name must be 2"),
//           email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
//           password: (value) => (value.length > 8 ? null : "password must be 8"),
//           password_confirmation: (value,values) => (value === values.password ? null : "wrong pw"),
//         },
//       });
    
//   return (
//     <div className=' flex justify-center items-center h-screen'>
//         <form onSubmit={form.onSubmit(async(values) => {
//             try{
//                 const {data} = await register(values);
//                 // console.log(data);
//                 if(data?.success){
//                     nav("/login");
//                 }
//             }catch(error){
//                 console.log(error);
//             }
//         })}
//         className=' flex-col flex gap-5 border-green-500 border w-96 p-3'>
//         <h1 className=' text-green-500 text-xl text-center'>Register</h1>
//         <TextInput placeholder="name" {...form.getInputProps('name')}/>
//         <TextInput placeholder="email" {...form.getInputProps('email')}/>
//         <PasswordInput placeholder="password" {...form.getInputProps('password')}/>
//         <PasswordInput placeholder="password_confirmation" {...form.getInputProps('password_confirmation')}/>
//         <p className=' text-sm text-gray-500'>if you have already account?  
//         <Link to={'/login'}>
//         <span className=' ml-1 text-base'>Login</span>
//         </Link>
//         </p>
//         <button disabled={isLoading && true} className=' bg-green-500 px-3 py-1'>Sign Up</button>
//         </form>
//     </div>
//   )
// }

// export default Register