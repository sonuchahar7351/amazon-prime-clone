import React from 'react'
import batman from '../images/jailer.jpg'
import { Link } from 'react-router-dom'
const Category = () => {
    return (
        <>
            <div className="flex items-center ml-9">
                <h1 className='text-blue-500 font-semibold text-2xl'>Prime</h1>
                <h1 className='text-white font-semibold text-xl ml-3'>Action Movies</h1>
            </div>
            <Link to="/details">
            <div className='flex items-center ml-9 overflow-scroll mt-4 no-amazon-scollbar'>
                <img src={batman} alt="" className='w-72 h-44 rounded-lg' />
                <img src={batman} alt="" className='w-72 h-44 ml-7 rounded-lg' />
                <img src={batman} alt="" className='w-72 h-44 ml-7 rounded-lg' />
                <img src={batman} alt="" className='w-72 h-44 ml-7 rounded-lg' />
                <img src={batman} alt="" className='w-72 h-44 ml-7 rounded-lg' />
                <img src={batman} alt="" className='w-72 h-44 ml-7 rounded-lg' />
                <img src={batman} alt="" className='w-72 h-44 ml-7 rounded-lg' />
                <img src={batman} alt="" className='w-72 h-44 ml-7 rounded-lg' />
                <img src={batman} alt="" className='w-72 h-44 ml-7 rounded-lg' />
                <img src={batman} alt="" className='w-72 h-44 ml-7 rounded-lg' />
                <img src={batman} alt="" className='w-72 h-44 ml-7 rounded-lg' />
                <img src={batman} alt="" className='w-72 h-44 ml-7 rounded-lg' />
            </div>
            </Link>
        </>
    )
}

export default Category