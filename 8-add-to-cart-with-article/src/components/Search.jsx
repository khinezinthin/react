import React from 'react'
import { useLocation } from 'react-router-dom'

const Search = () => {
  const location = useLocation()
  const items = location?.state?.item
  return (
    <div>
      {items?.map(item => {
        return(
          <div key={item.id}>
            <p>{item.title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Search