// import Cookies from 'js-cookie'
// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { useLoginMutation } from '../redux/api/authApi'
// import { removeUser } from '../redux/services/authSlice'

// const Navbar = () => {
//     // const {user} = useSelector(state => state.authSlice)
//     // console.log(user);
//     const user = JSON.parse(Cookies.get("user"))
//     // console.log(user);
//     const token = Cookies.get("token")
//     const nav = useNavigate()
//     const [logout] = useLoginMutation()
//     const dispatch = useDispatch()

//     const logoutHandler = ()=>{
//         logout(token)
//         dispatch(removeUser())
//         nav("/login")
//     }
//   return (
//     <div className=' border shadow-lg p-5 flex justify-between items-center '>
//         <div>
//             <h1>MMS IT</h1>
//         </div>
//         <div className=' flex items-center justify-between gap-5'>
//             <p>{user.name}</p>
//             <p>{user.email}</p>
//         </div>
//         <button onClick={logoutHandler} className=' bg-red-600 px-3 py-1'>Log out</button>
//     </div>
//   )
// }

// export default Navbar