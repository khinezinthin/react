import React, { useEffect, useState } from "react";
import { BsFillHandbagFill } from "react-icons/bs";
import { Input } from "@mantine/core";
import { Badge } from '@mantine/core';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const Navbar = () => {
  const {cart} = useSelector(state => state.cart)
  const [products,setProducts] = useState([])
  const [search,setSearch] = useState("")
  const navigate = useNavigate()
  const onClick = (e)=>{
    e.preventDefault()
    navigate('/search',{state:{item:filter}})
    setSearch("")
  }
  const filter = products.filter(pd=> pd.title.toLowerCase().includes(search))
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
    <div>
      <div className="flex justify-around p-7 shadow-lg">
        <Link to={'/'}>
        <h1 className="text-2xl text-gray-600">Comfify</h1>
        </Link>
        <div className="flex items-center gap-5">
        <form onSubmit={onClick}>
          <Input value={search} onChange={(e)=> setSearch(e.target.value)} variant="filled" placeholder="Search" />
        </form>
          <Link to={'/addtocart'}>
          <div className="relative">
            <BsFillHandbagFill className="text-purple-500 text-4xl relative" style={{zIndex:10}}></BsFillHandbagFill>
            <Badge className="absolute bottom-6 left-5" color="violet">{cart.length}</Badge>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
