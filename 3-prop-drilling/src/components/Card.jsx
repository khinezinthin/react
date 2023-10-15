import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({title,price,image,id}) => {
  return (
    <div>
        <div className='w-72 flex flex-col border shadow-md rounded-sm p-5'>
            <img src={image} className={"w-[200px] h-[200px]"} />
            <p>{title.substring(0,25)}...</p>
            <p>${price}</p>
            <div className='flex'>
            <button className='py-1 mr-10 px-5 bg-teal-600 text-white rounded-md'>add to cart</button>
            {/* <Link to={`/detail/${id}`}>
            <button className='py-1 px-5 bg-teal-600 text-white rounded-md'>detail</button>
            </Link> */}
            </div>
        </div>
    </div>
  )
}

export default Card