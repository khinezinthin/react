import React, { useContext } from 'react'
import { StateContext, StateContextCustom } from '../context/StateContext'

const One = () => {
  // const count = StateContextCustom(state => state)
    const {state} = StateContextCustom()
    // console.log(state);
  return (
    <div>
       <p className='text-4xl m-5'>{state.count}</p>
        
    </div>
  )
}

export default One