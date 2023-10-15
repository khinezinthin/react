import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetDetailBlogQuery } from '../../redux/blogApi'
import { Link } from "react-router-dom";

const Detail = () => {
  const {id} = useParams()
  const {data : blog} = useGetDetailBlogQuery(id)
  console.log(blog);
  return (
    <div className='flex justify-center mt-10'>
      <div className='w-72 flex flex-col shadow p-4'>
            <img className='w-[200px]' src={blog?.img} alt="" />
            <div className='flex gap-1 flex-col'>
                <h2>{blog?.title}</h2>
                <p>{blog?.desc}</p>
              <div className='flex gap-5'>
                  <button className=' bg-yellow-500 px-3 py-1 rounded'>Detail</button>
                  <Link to={'/'}>
                    <button className=' bg-green-500 px-3 py-1 rounded'>Back</button>
                  </Link>
                  <Link to={`/edit/${blog?.id}`} >
                    <button className=' bg-orange-500 px-3 py-1 rounded'>Edit</button>
                  </Link>
            </div>
            </div>
      </div>
    </div>
  )
}

export default Detail






