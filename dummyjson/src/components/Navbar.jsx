import React from 'react'
import { NavLink } from 'react-router-dom'
import {BsShop} from 'react-icons/bs'

const Navbar = () => {
  const nav = [
    {name:"Home",link:"/"},
    {name:"Products",link:"/products"},
    // {name:Home},
  ]
  return (
    <div className='fixed z-10 top-0 left-0 w-full bg-gray-300'>
      <nav className=' flex justify-between items-center px-10 py-8'>
        <div>
          SHOP
          <BsShop></BsShop>
        </div>
        <ul className=' flex gap-5 items-center'>
          {nav?.map(nav => {
            return(
              <div key={nav.name}>
                <NavLink to={nav.link}>
                <li className=' text-xl text-red-800 font-bold'>{nav.name}</li>
              </NavLink>
              </div>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar