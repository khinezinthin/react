import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import One from './components/One'
import Three from './components/Three'
import Two from './components/Two'
import { increment,decrement,increByPayload,decreByPayload, incrementByCount } from './feature/counterSlice'

const App = () => {
  // // const count = useSelector(state => state.counter.value)
  // const {value,count} = useSelector(state => state.counter)
  // // console.log(value);
  // const dispatch = useDispatch()
  return (
    <div>
      {/* <div>
      <h2 className='mx-5 text-2xl'>{value}</h2>
      <button onClick={()=> dispatch(increment())} className='bg-black px-3 py-1 text-white'>incre</button>
      <button onClick={()=> dispatch(decrement())} className='bg-black px-3 py-1 text-white'>decre</button>
      <button onClick={()=> dispatch(increByPayload(10))} className='bg-black px-3 py-1 text-white'>increByPaload</button>
      <button onClick={()=> dispatch(decreByPayload(10))} className='bg-black px-3 py-1 text-white'>decreByPaload</button>
      </div>

      <div>
      <h2 className='mx-5 text-2xl'>{count}</h2>
      <button onClick={()=> dispatch(incrementByCount())} className='bg-black px-3 py-1 text-white'>incre</button>
      </div> */}

      <One/>
      <Two/>
      <Three/>
    </div>
  )
}

export default App