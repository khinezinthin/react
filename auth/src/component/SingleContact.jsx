// import Cookies from 'js-cookie'
// import React from 'react'
// import { useParams } from 'react-router-dom'
// import { useGetSingleContactQuery } from '../redux/api/contactApi'

// const SingleContact = () => {
//     const token = Cookies.get("token")
//     const {id} = useParams()
//     const {data} = useGetSingleContactQuery({token,id})
//     console.log(data);
//   return (
//     <div>
//         <h1>{data?.contact?.name}</h1>
//     </div>
//   )
// }

// export default SingleContact