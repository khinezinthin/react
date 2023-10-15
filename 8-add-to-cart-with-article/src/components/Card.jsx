import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../feature/services/cartSlice'

const Card = (props) => {
    const {title,price,image} = props
    // const {cart} = useSelector(state => state.cart)
    // console.log(cart);
    const dispatch = useDispatch()
  return (
    <div className='w-72 flex flex-col p-5 border shadow gap-2'>
        <img src={image} className="max-w-[150px] h-[180px] mb-2" />
        <h1>{title.substring(0,25)}...</h1>
        <p>{price}</p>
        <button onClick={()=> dispatch(addToCart(props))} className='text-white bg-purple-700 px-4 py-1 rounded'>Add To Cart</button>
    </div>
  )
}

export default Card