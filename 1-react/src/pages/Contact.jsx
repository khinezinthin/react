import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'



const Contact = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const handler = () => {
    // navigate("/");
    navigate(-1)
  }
  return (
    <div>
        <h1>Contact</h1>
        <p>{location.state?.test}</p>
        <button onClick={()=> handler()}>go to home</button>
        {/* <Link to={'/'}>
          <button>go to home</button>
        </Link> */}
    </div>
  )
}

export default Contact
