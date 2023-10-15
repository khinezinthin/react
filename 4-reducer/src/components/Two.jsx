import React, { useContext } from 'react'
import { StateContextCustom } from '../context/StateContext'

const Two = () => {
    const {state,dispatch} = StateContextCustom()
  return (
    <div>
        <button onClick={()=> dispatch({type:"increase",payload:10})} className='mx-3 px-5 py-2 bg-slate-600 rounded text-white'>Increase</button>  
    </div>
  )
}

export default Two