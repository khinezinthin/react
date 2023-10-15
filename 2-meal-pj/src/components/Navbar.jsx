import React, { useState } from 'react';
import {CiForkAndKnife} from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [search,setSearch] = useState("");
  const navigate = useNavigate();
  const onSubmit = (e)=>{
    e.preventDefault();
    navigate("/search/" + search)
    // navigate("/search",{state:{test:search}})
  }

  return (
    <div className="flex justify-around items-center p-5 bg-orange-300">
        <div className='font-bold text-3xl'>
          <CiForkAndKnife/>
        </div>

        <form onSubmit={onSubmit}>
          <input onChange={(e)=> setSearch(e.target.value) } type="text" className='bg-black text-white' />
        </form>        
    </div>
  )
}

export default Navbar