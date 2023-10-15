import React from 'react'
import { useDispatch } from 'react-redux'
import { increByPayload, increment, incrementByCount } from '../feature/counterSlice'

const Three = () => {
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=> dispatch(increment())} className='bg-black text-white px-3 py-1 mr-5'>increment by value</button>
        <button onClick={()=> dispatch(incrementByCount(10))} className='bg-black text-white px-3 py-1'>increment by count</button>
    </div>
  )
}

export default Three