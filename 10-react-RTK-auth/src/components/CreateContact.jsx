import React from 'react'
import { useCreateContactMutation } from '../redux/api/contactApi'
import Cookies from 'js-cookie'
import { useForm } from "@mantine/form";
import { Loader, TextInput } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const CreateContact = () => {
    const token = Cookies.get("token")
    const [createContact, {isLoading}] = useCreateContactMutation()
    const nav = useNavigate()

    const form = useForm({
        initialValues: {
          name: "",
          email: "@gmail.com",
          phone: "09876786866",
          address: "aaavvbbgd",
        },
    
        validate: {
          name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
          email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
        //   phone: hasLength({min:9,max:11}),
          address: (value) => (value.length < 5 ? 'address must have at least 5 letters' : null),
        },
      });
  return (
    <div className='flex h-screen justify-center items-center'>
        <form onSubmit={form.onSubmit(async(values) =>{
        try{
          const {data} = await createContact({token,contact:values})
          console.log(data);
          if(data?.success){
            nav("/")
          }
        }catch(error){
          console.log(error);
        }
      }
        )} className=' border border-blue-500 shadow w-96 p-7 flex flex-col gap-5'>
        <h1 className=' text-2xl'>Create Contact</h1>
        <TextInput {...form.getInputProps('name')} placeholder='Name'/>
        <TextInput {...form.getInputProps('email')} placeholder='Email'/>
        <TextInput {...form.getInputProps('phone')} placeholder='Phone'/>
        <TextInput {...form.getInputProps('address')} placeholder='Address'/>
        
        <button disabled={isLoading && true} type='submit' className=' bg-blue-500 px-4 py-1 rounded'>
        {isLoading ? (<Loader className=" block mx-auto" color="gray" size="sm"/> ) : ("Done")}
        </button>
        
      </form>
    </div>
  )
}

export default CreateContact