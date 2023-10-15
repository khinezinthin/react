import React from 'react'
import "./nav.css"
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul className="nav-container">
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
                <NavLink to={"/service"}>Service</NavLink>
            </li>
            <li>
                <NavLink to={"/contact"}>Contact</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar