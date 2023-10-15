import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate();
  const inputRef = useRef();
  // const [input,setInput] = useState('');
  const handler = () => {
    navigate("/contact",{state:{test:inputRef.current.value}});
    // console.log(inputRef.current.value);

  }
  
   
  return (
    <div>
        <h1>Home</h1>
        <input type="text" ref={inputRef} />
        {/* <input type="text" value={input} onClick={(e)=> setInput(e.target.value)} /> */}
        <button onClick={()=>handler()}>go to contact</button>
      {/* <Link to={'/about'}>
        <button>go to about</button>
      </Link> */}


      
    </div>
  )
}

export default Home
