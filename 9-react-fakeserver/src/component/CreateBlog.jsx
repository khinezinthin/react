import React, { useState } from 'react'
import { blogApi, useCreateBlogMutation } from '../../redux/blogApi'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
    const [ CreateBlog ,{isLoading}] = useCreateBlogMutation()
    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")
    const [img,setImg] = useState("")
    const nav = useNavigate()

    const createBlogHandler = (e)=>{
        e.preventDefault();
        const blog = {id: Date.now(), title,desc,img}
        CreateBlog(blog)
        // console.log(title,desc,img);
        nav('/')
    }
  return (
    <div className='flex justify-center items-center h-screen'>
        <form onSubmit={createBlogHandler} className='flex flex-col gap-10 shadow-lg w-96 p-7'>
            <h2 className=' font-medium tex text-center text-2xl text-orange-700'>Create Blog</h2>
            <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} className=' border-b border-b-orange-300 outline-none' placeholder='title' />
            <input type="text" value={desc} onChange={(e)=> setDesc(e.target.value)} className=' border-b border-b-orange-300 outline-none' placeholder='description' />
            <input type="text" value={img} onChange={(e)=> setImg(e.target.value)} className=' border-b border-b-orange-300 outline-none' placeholder='image' />
            <button className=' bg-orange-500 px-3 py-1 rounded'>Create blog</button>
        </form>
    </div>
  )
}

export default CreateBlog


