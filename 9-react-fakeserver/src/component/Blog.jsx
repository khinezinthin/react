import React from 'react'
import { useGetBlogsQuery } from '../../redux/blogApi'
import Card from './Card';
import { Link } from 'react-router-dom';

const Blog = () => {
    const {data : blogs, isLoading} = useGetBlogsQuery()
    console.log(blogs);
    if(isLoading){
        return(
            <div>
                hello
            </div>
        )
    }
  return (
    <>
        <div className='flex justify-center mt-10'>
            <Link to={`/create`}>
                <button className=' bg-orange-500 px-3 py-1 rounded'>Create blog</button>
            </Link>
        </div>
        <div className=' flex flex-wrap justify-center items-center gap-10 my-10'>
        {blogs?.map(blog =>{
            return(
                <div key={blog.id}>
                    <Card blog={blog}/>
                </div>
            )
        })}
        </div>
    </>
  )
}

export default Blog


