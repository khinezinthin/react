import React, { useContext } from 'react'
import { StateContext } from '../context/StateContext'

const Three = () => {
    const {count,setCount} = useContext(StateContext)
  return (
    <div className='m-2'>
        <button onClick={()=> setCount(count-1)} className='px-5 py-2 bg-slate-600 rounded text-white'>Decrease</button>
    </div>
  )
}

export default Three