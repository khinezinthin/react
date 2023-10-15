import React, { Children } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import ContactTable from '../components/ContactTable'

const Dashboard = () => {
  // const user = useSelector(state => console.log(state.authSlice.user))
  // const {user} = useSelector(state => state.authSlice)
  // console.log(user);
  return (
    <div>
      <Navbar/>
      <ContactTable/>
    </div>
  )
}

export default Dashboard