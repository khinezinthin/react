import React, { useState } from 'react'
import {IoIosArrowUp} from "react-icons/io"
import {IoIosArrowDown} from "react-icons/io"
import { StateContextCustom } from '../context/StateContext'

const Cart = ({item,increasePrice,decreasePrice,setMainTotal,mainTotal}) => {
    const {dispatch} = StateContextCustom()
    const {id,title,price,image} = item
    const [quantity,setQuantity] = useState(1);

    const increaseQty = ()=>{
        setQuantity(quantity + 1)
        increasePrice(price)
    }

    const decreaseQty = ()=>{
        if(quantity>1){
            setQuantity(quantity - 1)
            decreasePrice(price)
        }
    }
    const oneItemPrice = quantity * price

    const delBtn = ()=>{
        if(confirm("Are You Sure ?")){
            dispatch({type:"REMOVE_FROM_CART",payload:item})
        }
        setMainTotal(mainTotal - oneItemPrice)
    }
  return (
    <div>
        <div className='flex justify-around items-center mt-20'>
            <div className='flex gap-5 items-center'>
                <img src={image} alt="" className='w-[200px] rounded'/>
                <div>
                    <h2 className='text-2xl font-bold text-blue-800 w-[500px]'>{title}</h2>
                    <p className='text-2xl text-blue-600 mb-2 mt-1  '>${oneItemPrice.toFixed(2)}</p>
                    <p onClick={delBtn} className='text-xl text-red-500 cursor-pointer font-semibold'>remove</p>
                </div>
            </div>

            <div className='flex flex-col items-center'>
                <p onClick={increaseQty} className='text-3xl text-blue-600 cursor-pointer'><IoIosArrowUp/></p>
                <p className='text-3xl text-blue-600 cursor-pointer'>{quantity}</p>
                <p onClick={decreaseQty} className='text-3xl text-blue-600 cursor-pointer'><IoIosArrowDown/></p>
            </div>
        </div>


    </div>
  )
}

export default Cart