import React from 'react'
import lens from '../images/lens.png'
import profile from '../images/profile.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-black flex items-center p-2'>
        <h1 className='ml-36 text-white font-semibold text-2xl'>prime video</h1>
        <Link to={'/home'} className='text-gray-300 ml-20 text-lg font-semibold'>Home</Link>
        <h1 className='text-gray-300 ml-96 text-lg font-semibold'>Categories</h1>
        <img src={lens} alt="" className='w-6 h-6 ml-5'/>
        <h1 className='text-gray-300 ml-5 text-lg font-semibold'>EN</h1>
        <img src={profile} alt="" className='w-9 h-9 ml-5'/>
    </div>
  )
}

export default Navbar