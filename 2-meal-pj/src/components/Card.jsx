import React from 'react'
import {BiSearch} from "react-icons/bi"
import { Link } from 'react-router-dom';
import   "./Card.css";
const Card = ({product}) => {
    const{strMeal,strMealThumb} = product;
  return (
    <div className='relative parent'>
        <img src={product.strMealThumb} className="w-[400px]  rounded-lg shadow image" />
        <div className='icon'>
            <Link to={`/detail/${product.idMeal}`}>
              <p className=' bg-orange-500 w-12 h-12 rounded-[100%] flex justify-center items-center absolute top-[40%] left-[45%]'>
                  <BiSearch className='text-3xl text-white'/>
              </p>
            </Link>
        </div>
    </div>
  )
}

export default Card