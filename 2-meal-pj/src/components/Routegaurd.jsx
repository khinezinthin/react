import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const Routegaurd = ({children}) => {
    const location = useLocation()
    if(location?.state != null){
        return children
    }else{
        return <Navigate to={'/'}/>
    }
  return (
    <div>Routegaurd</div>
  )
}

export default Routegaurd