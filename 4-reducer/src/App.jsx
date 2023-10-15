   import React, { useReducer } from 'react'
import One from './components/One'
import Two from './components/Two'

const App = () => {
  // const initialState = {
  //   count : 0,
  //   value : 10
  // };
  // const reducer = (state,action)=>{
  //   switch(action.type){
  //     case"increase":
  //     return {...state,count:state.count+1};
  //     // return state + action.payload;

  //     case"increase2":
  //     return {...state,value:state.value+10};
  //     // // return state - action.payload;

  //     default:
  //       return state;
  //   }
  // }
  // const [state,dispatch] = useReducer(reducer,initialState)
  return (
    // <div>
    //   <p className='text-4xl m-5'>{state.count}</p>
    //   <button onClick={()=> dispatch({type:"increase"})} className='mx-3 px-5 py-2 bg-slate-600 rounded text-white'>Increase</button>  
      
    //   <p className='text-4xl m-5'>{state.value}</p>
    //   <button onClick={()=> dispatch({type:"increase2"})} className='mx-3 px-5 py-2 bg-slate-600 rounded text-white'>Increase by value</button>  
      
    // </div>

    <div>
      <One/>
      <Two/>
    </div>
  )
}

export default App