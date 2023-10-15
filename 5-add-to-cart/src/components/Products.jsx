import React from 'react'
import { StateContextCustom } from '../context/StateContext'
import Card from './Card';

const Products = () => {
    const {state:{products}} = StateContextCustom()
    // console.log(products);
  return (
    <div className='flex flex-wrap justify-center items-center gap-10 my-20'>
        {products?.map(pd =>{
            return(
                <Card key={pd.id} {...pd}/>
            )
        })}
    </div>
  )
}

export default Products