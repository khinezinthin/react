import React, { useEffect, useState } from 'react'
import { useEditBlogMutation, useGetDetailBlogQuery } from '../../redux/blogApi'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")
    const [img,setImg] = useState("")
    const {id} = useParams()
    const {data : blog} = useGetDetailBlogQuery(id)
    const [editBlog] = useEditBlogMutation()
    const nav = useNavigate()

    useEffect(()=>{
        setTitle(blog?.title)
        setDesc(blog?.desc)
        setImg(blog?.img)
    },[blog])

    const editHandler = (e)=>{
        e.preventDefault();
        const newData = {id,title,desc,img}
        editBlog(newData)
        nav('/')
    }
  return (
    <div className='flex justify-center items-center h-screen'>
        <form onSubmit={editHandler} className='flex flex-col gap-10 shadow-lg w-96 p-7'>
            <h2 className=' font-medium tex text-center text-2xl text-orange-700'>Create Blog</h2>
            <input type="text" defaultValue={title} onChange={(e)=> setTitle(e.target.value)} className=' border-b border-b-orange-300 outline-none' placeholder='title' />
            <input type="text" defaultValue={desc} onChange={(e)=> setDesc(e.target.value)} className=' border-b border-b-orange-300 outline-none' placeholder='description' />
            <input type="text" defaultValue={img} onChange={(e)=> setImg(e.target.value)} className=' border-b border-b-orange-300 outline-none' placeholder='image' />
            <button className=' bg-orange-500 px-3 py-1 rounded'>Create blog</button>
        </form>
    </div>
  )
}

export default Edit