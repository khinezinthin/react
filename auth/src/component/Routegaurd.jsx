import Cookies from 'js-cookie'
import React from 'react'
import { Navigate } from 'react-router-dom'

const Routegaurd = ({children}) => {
    const token = Cookies.get("token")
    if(token){
        return children
    }else{
        return <Navigate to={'/login'}/>
    }
  return (
    <div>Routegaurd</div>
  )
}

export default Routegaurd