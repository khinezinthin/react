import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  
  return (
    <div>
        <h1>About</h1>
        <Link to={'/contact'}>
          <button>go to contact</button>
        </Link>
          
    </div>
  )
}

export default About
