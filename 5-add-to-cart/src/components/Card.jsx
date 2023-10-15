import React from 'react'
import { StateContextCustom } from '../context/StateContext'

const Card = (props) => {
  const {title,price,id,image} = props
  const {dispatch} = StateContextCustom()
  return (
    <div>
        <div className='w-72 rounded shadow p-3 border border-blue-200'>
            <div className='flex justify-center'>
            <img src={image} className={"max-w-[200px] h-[150px]"} />
            </div>
            <p className='text-center text-lg font-bold text-blue-700'>{title.substring(0,18)}...</p>
            <p className='text-blue-900 mb-3 text-center'>price : ${price}</p>

            <div className='text-center'>
            <button onClick={()=> dispatch({type:"ADD_TO_CART",payload:props})} className='px-4 py-2 mr-3 bg-blue-800 text-white rounded shadow'>Add To Cart</button>
            <button className='px-4 py-2 bg-blue-800 text-white rounded shadow'>Detail</button>
            </div>
        </div>

    </div>
  )
}

export default Card