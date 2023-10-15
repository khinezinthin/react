import React from 'react'
import { Badge } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { addItemsQuantity, removeFromCart, takeItemsQuantity } from '../feature/services/cartSlice';

const Cart = (props) => {
    const {image,title,price,quantity} = props
    const dispatch = useDispatch()

    const oneItemPrice = quantity * price

    const decreaseQty = ()=>{
        if(quantity>1){
            dispatch(takeItemsQuantity(props))
        }
    }
  return (
    <div>
        <div className='flex justify-between items-center bg-gray-50 p-5 relative'>
            
            <Badge onClick={()=>  dispatch(removeFromCart(props))} className="absolute bottom-6 text-lg top-[-10px] right-[-10px] cursor-pointer" color="violet">x</Badge>
        <div className='flex items-center gap-5'>
            <img src={image} className="w-[200px] h-[210px]" alt="" />
            <div>
                <p className='font-bold'>{title}</p>
                <p className='font-bold'>$ {oneItemPrice.toFixed(2)}</p>
            </div>
        </div>

        <div className='flex gap-5 border p-2'>
            <p onClick={()=> decreaseQty()} className='text-lg cursor-pointer select-none'>-</p>
            <p className='text-lg cursor-pointer select-none'>{quantity}</p>
            <p onClick={()=> dispatch(addItemsQuantity(props))} className='text-lg cursor-pointer select-none'>+</p>
        </div>
    </div>
    </div>
  )
}

export default Cart