import React, { useContext } from 'react'
import { StateContext } from '../context/StateContext'

const Four = () => {
    const {setCount} = useContext(StateContext)
  return (
    <div className='m-2'>
        <button onClick={()=>setCount(0)} className='px-5 py-2 bg-slate-600 rounded text-white'>Reset</button>
    </div>
  )
}

export default Four