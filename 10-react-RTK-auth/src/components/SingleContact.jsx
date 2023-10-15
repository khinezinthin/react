import React from 'react'
import { useGetSingleContactQuery } from '../redux/api/contactApi'
import { Link, useParams } from 'react-router-dom'
import Cookies from 'js-cookie'

const SingleContact = () => {
    const {id} = useParams()
    const token = Cookies.get("token")
    const {data} = useGetSingleContactQuery({id,token})
    console.log(data);
  return (
    <div className=' flex justify-center items-center h-screen'>
        <div className=' flex flex-col gap-3 shadow-lg p-10'>
            <img src={data?.contact?.photo === null ? "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" : data?.contact?.photo} className=' w-32' alt="" />
            <p>{data?.contact?.name}</p>
            <p>{data?.contact?.email}</p>
            <p>{data?.contact?.phone}</p>
            <p>{data?.contact?.address}</p>
            <Link to={'/'}>
                <button className=' bg-green-600 px-5 py-1 text-white'>Back</button>
            </Link>
        </div>
    </div>
  )
}

export default SingleContact