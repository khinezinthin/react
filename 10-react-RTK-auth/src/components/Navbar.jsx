import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from '../redux/api/authApi';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { removeUser } from '../redux/services/authSlice';

const Navbar = () => {
    // const user = useSelector(state => console.log(state.authSlice.user))
  // const {user} = useSelector(state => state.authSlice)
  // const {token} = useSelector(state => state.authSlice)
  // console.log(token);

  const user = JSON.parse(Cookies.get("user"))
  const token = Cookies.get("token")
    const [logout] = useLogoutMutation()
    const nav = useNavigate()
    const dispatch = useDispatch()

   const logoutHandler = async()=>{
      const {data} = await logout(token)
      // console.log(data);
      dispatch(removeUser())
      if(data?.success){
        nav(`/login`)
      }
    }
  return (
    <div>
        <div className='flex p-7 justify-around items-center shadow-lg'>
            <h2>MMS</h2>
            <div>
            <div>
                <p>{user?.name}</p>
                <p>{user?.email}</p>
            </div>

            <div>
              <button onClick={logoutHandler} className=' bg-red-500 px-2 py-1 text-white rounded'>Log Out</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar