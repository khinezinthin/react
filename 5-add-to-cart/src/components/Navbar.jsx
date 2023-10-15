import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { StateContextCustom } from '../context/StateContext';

const Navbar = () => {
    const {search,setSearch} = StateContextCustom()
    const {state:{cart}} = StateContextCustom()
  return (
    <div className='flex justify-around items-center p-5 shadow '>
        <Link to={'/'}>
        <h2 className='text-3xl text-blue-500'>SHOP</h2>
        </Link>
        <div>
            <input value={search} onChange={(e)=> setSearch(e.target.value)} type="text" className='border-b-2 border-b-blue-500 outline-none' />
            <Link to={'/add-to-cart'}>
            <button className='px-4 py-2 mr-3 bg-blue-500 text-white rounded shadow'>{cart.length}</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar