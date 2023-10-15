import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Cart from './Cart'

const AddToCart = () => {
    const {cart,totalAmount} = useSelector(state => state.cart)

    if(cart.length === 0){
        return(
            <div className='flex justify-center my-20'>
            <div className='text-center'>
            <p className='font-bold text-xl'>Your Cart Is Empty</p>
            <Link to={'/'}>
            <button className='bg-purple-500 px-3 py-1 rounded mt-4'>
                Fill it

            </button>
            </Link>
            </div>
        </div>
        )
    } else{
        return (
            <div className='flex justify-center flex-col mx-20 my-20 gap-10'>
                {cart.map(item=>{
                    return(
                        <div key={item.id}>
                            <Cart {...item}/>
                        </div>
                    )
                })}
        
                <div>
                    <hr className='w-[70%] mx-auto my-10' />
                    <div className='flex w-[70%] mx-auto justify-between'>
                    <p className=' text-2xl font-bold'>Total</p>
                    <p className='text-2xl font-bold'>{totalAmount.toFixed(2)}</p>
                    </div>
                </div>
            </div>
          )
    }
  
}

export default AddToCart