import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({product}) => {
  return (
    <div>
      <div className=' w-80 border flex justify-center flex-col items-center p-3 bg-white rounded shadow-lg'>
        <div className=' cursor-pointer img p-3'>
          <Link>
            <img className=' w-[200px] h-[200px]' src={product.thumbnail} alt="" />
          </Link>
        </div>
        <div className=' mt-2'>
          <h1 className=' font-bold text-lg'>{product.title?.substr(0,20)} {product.title.length >= 20 ? "..." : null}</h1>
          <p>Brand : <span className=' text-purple-500'>${product.brand }</span></p>
          <p>Price : <span className=' text-red-600 font-bold'>${product.price}</span></p>

          <div className='flex justify-between items-center gap-5'>
            <Link to={`/detail`}>
            <button className=' border border-green-600 hover:bg-green-500 transition-[100ms] px-3 py-1 rounded'>More info</button>
            </Link>
            <button className=' bg-green-600 px-2 py-1 hover:bg-green-700 transition-[1000ms] border-green-500 rounded my-2'>Add to cart</button>
          </div>        
        </div>
      </div>
    </div>
  )
}

