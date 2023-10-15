import React, { useContext, useEffect, useState } from 'react'
import { StateContext } from '../context/StateContext';
import { Card } from '../components/Card'
import { Link } from 'react-router-dom'


const Products = () => {
  const {products,setProducts,setFilter,filter} = useContext(StateContext)
  // console.log(products);
  const [active,setActive] = useState("all categories")
  // const [filter,setFilter] = useState([])

  // const catFilter = categories?.slice(0,6)
  // console.log(catFilter);

  
  const cat = [
    {name: "smartphones"},
    {name: "laptops"},
    {name: "fragrances"},
    {name: "groceries"},
    {name: "home-decoration"},
  ]
  useEffect(()=>{
    if(active == "all categories"){
      setFilter(products)
      return;
    }else{
      const filterPd = products?.filter(pd => pd.category?.includes(active))
      // console.log(filterPd);
      setFilter(filterPd)
    }
  },[active])
  
 
  return (
    <div  className=' bg-slate-100 mt-[88px]'>
      <div>
        <h1 className=' text-xl text-green-500 text-center py-5'>All Products</h1>
      </div>
      <div className=' text-center mb-3'>
        <Link to={'/'}>
          <span>Home/ </span>
        </Link>
        <span className=' active2'>{active}</span>
      </div>
      <div>
        <div className=' flex justify-between gap-20'>
            <div className='p-1'>
              <div className='p-10 fixed flex flex-col gap-4 '>
              <p onClick={()=> setActive("all categories")} className={` ${active == "all categories"? "active2" : null }  cursor-pointer hover:text-green-500 transition-[1000ms]`}>All Categories <span className=' ml-2'>({products.length})</span></p>
              {cat.map(cat => {
                return(
                  <div key={cat.name}>
                    <p onClick={()=> setActive(cat.name)} className={`${active == cat.name ? "active2" : null } cursor-pointer hover:text-green-500 transition-[1000ms]`}>{cat.name}</p>
                  </div>
                )
              })}
              </div>
            </div>
            <div>

            <div className='flex justify-center items-center flex-wrap gap-5 ml-10 mb-10'>
            {filter?.map(product => {
              return(
                <div key={product.id}>
                  <Card product={product}/>
                </div>
              )
            })}
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Products