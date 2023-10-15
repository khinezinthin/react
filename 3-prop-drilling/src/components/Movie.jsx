import React from 'react'

const Movie = ({movie}) => {
    const {name,price} = movie
  return (
    <div className='mx-auto'>
        <p>{name}</p>
        <p>$ {price}</p>
    </div>
  )
}

export default Movie