import React, { useContext } from 'react'
import { StateContext } from '../context/StateContext'

const One = () => {
    const {count} = useContext(StateContext)
  return (
    <div className='m-2'>
        <h1 className='text-3xl'>Count : {count}</h1>
    </div>
  )
}

export default One