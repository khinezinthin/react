import React from 'react'
import { useSelector } from 'react-redux'

const Two = () => {
    const {count} = useSelector(state => state.counter)
  return (
    <div>
        <h1 className='mx-5 text-2xl'>{count}</h1>
    </div>
  )
}

export default Two