import React from 'react'
import { Link } from "react-router-dom";
import { useDeleteBlogMutation } from '../../redux/blogApi';

const Card = ({blog}) => {
  const [deleteBlog] = useDeleteBlogMutation()
  return (
    <div>
        <div className='w-72 flex flex-col shadow p-4'>
            <img className='w-[200px]' src={blog.img} alt="" />
            <div className='flex flex-col gap-2'>
                <h2>{blog?.title}</h2>
                <p>{blog?.desc}</p>
                <div className='flex gap-3'>
                  <Link to={`/detail/${blog?.id}`}>
                      <button className=' bg-yellow-500 px-3 py-1 rounded'>Detail</button>
                  </Link>
                  <button onClick={()=> deleteBlog(blog?.id)} className=' bg-red-500 px-3 py-1 rounded'>Delete</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card


