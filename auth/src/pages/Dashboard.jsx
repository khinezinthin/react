import React, { useEffect, useReducer, useState } from 'react'
import { useGetPdQuery } from '../redux/api/authApi'
import { useLocation } from 'react-router-dom';
// import Navbar from '../component/Navbar'
// import ContactTable from '../component/ContactTable'

const Dashboard = () => {
  const [pd,setPd] = useState([]);
  const location = useLocation();
  const token = location?.state?.token;
  // console.log(token);
  const {data} = useGetPdQuery(token);
  
  useEffect(()=>{
    const pd = data?.data
    setPd(pd)
  },[data])
  console.log(pd);
  return (
    <div>
      {/* <Navbar/>
      <ContactTable/> */}
      dashboard

      {pd?.map(pd => {
        return(
          <div key={pd?.id}>
            <img src={pd?.photo} alt="" />
          </div>
        )
      })}
    </div>
  )
}

export default Dashboard