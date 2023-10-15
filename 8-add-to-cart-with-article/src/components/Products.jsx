import React, { useEffect, useState } from 'react'
import Card from './Card'
import Loading from './Loading'

const Products = () => {
    const [products,setProducts] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    useEffect(()=>{
        fetchData()
    },[])
    
    const fetchData = async()=>{
        const api = await fetch(`https://fakestoreapi.com/products`)
        const data = await api.json()
        setProducts(data)
        setIsLoading(false)
    }
    
    if(isLoading){
        return <Loading/>
    }
  return (
    <div className='flex flex-wrap justify-center gap-10 my-20'>
        {products.map(product =>{
            return(
                <div key={product.id}>
                    <Card {...product}/>
                </div>
            )
        })}
    </div>
  )
}

export default Products