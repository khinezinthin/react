// import { TextInput } from '@mantine/core'
// import React from 'react'
// import { useForm } from '@mantine/form';
// import { useCreateContactMutation } from '../redux/api/contactApi';
// import Cookies from 'js-cookie';
// import { useNavigate } from 'react-router-dom';

// const CreateContact = () => {
//     const [createContact, {isLoading}] = useCreateContactMutation()
//     const token = Cookies.get("token")
//     const nav = useNavigate()
//     const form = useForm({
//         initialValues: {
//           name: 'khine',
//           phone: '0999999999',
//           email: 'aa@gmail.com',
//           address: 'hoooo',
//         },
    
//         validate: {
//             name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
//             email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
//           //   phone: hasLength({min:9,max:11}),
//             address: (value) => (value.length < 5 ? 'address must have at least 5 letters' : null),
//         },
//       });
//   return (
//     <div className=' flex justify-center h-screen items-center'>
//         <form onSubmit={form.onSubmit(async(values) => {
//             // console.log(values);
//             try{
//               const {data} = await createContact({token,contact:values});
//               console.log(data);
//               if(data?.success){
//                 nav('/')
//               }
//             }catch(error){
//               console.log(error);
//             }
//         })}
//         className=' flex-col flex gap-5 border-green-500 border w-96 p-3'>
//         <h1 className=' text-green-500 text-xl text-center'>Log in</h1>
//         <TextInput {...form.getInputProps('name')} placeholder='Name'/>
//         <TextInput {...form.getInputProps('email')} placeholder='Email'/>
//         <TextInput {...form.getInputProps('phone')} placeholder='Phone'/>
//         <TextInput {...form.getInputProps('address')} placeholder='Address'/>
//         <button disabled={isLoading && true} className=' bg-green-500 px-3 py-1'>create</button>
//         </form>
//     </div>
//   )
// }

// export default CreateContact