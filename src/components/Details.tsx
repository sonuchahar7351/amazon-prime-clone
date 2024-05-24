import React from 'react'
import peakyBlinder from '../images/peakyblinder.jpeg'
import Navbar from './Navbar'
const Details = () => {
  return (
    <>
        <Navbar/>
        <div style={{backgroundImage:`linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)) ,url(${peakyBlinder})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}} className='h-screen w-screen text-white pl-16 pt-20'>
        <h1 className='text-6xl font-bold'>Name</h1>
        <h1 className="text-2xl font-semibold mt-10">Description</h1>
        <h1>Language</h1>
    </div>
    </>
  )
}

export default Details