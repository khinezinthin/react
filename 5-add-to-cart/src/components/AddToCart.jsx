import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { StateContextCustom } from '../context/StateContext'
import Cart from './Cart';

const AddToCart = () => {
    const {state:{cart},dispatch} = StateContextCustom()
    const [mainTotal,setMainTotal] = useState(0)
    useEffect(()=>{
        setMainTotal(total);
    },[])

    const increasePrice = (price)=>{
        setMainTotal(mainTotal + price)
    }

    const decreasePrice = (price)=>{
        setMainTotal(mainTotal - price)
    }
    const total =()=> cart.reduce((pv,cv) => pv+cv.price,0)
    // console.log(total);

  return (
    <>
    {cart?.length === 0 ? (
        <div className='mt-20'>
            <h2 className='text-2xl font-semibold text-blue-400 flex justify-center mb-2'>Your Cart Is Empty</h2>
            <div className='flex justify-center'>
                <Link to={'/'}>
                    <button className='bg-blue-500 text-blue-100 text-xl px-4 py-1 rounded'>Fill it</button>
                </Link>
            </div>
        </div>
    ) : (
        <div>
            <div>
            {cart?.map(item =>{
                return(
                    <Cart key={item.id} item={item} increasePrice={increasePrice} decreasePrice={decreasePrice} setMainTotal={setMainTotal} mainTotal={mainTotal}/>
                )
            })}
            </div>
            <hr className='my-4 border border-b-blue-300 w-[80%] mx-auto'/>
            <div className='flex justify-around'>
                <h2 className='text-2xl text-blue-700'>Total</h2>
                <p className='text-2xl text-blue-700'>{mainTotal.toFixed(2)}</p>
            </div>
            <div className='text-center py-5'>
                <button onClick={()=>dispatch({type:"EMPTY_CART"})} className='border-2 border-red-500 p-3 text-red-500 rounded-lg font-bold'>Clear Cart</button>
            </div>
        </div>
    )}
    </>
  )
}

export default AddToCart