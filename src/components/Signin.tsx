import React from 'react'
import prime from '../images/prime.png'
const Signin = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img src={prime} alt="Prime" className='w-48 h-24 mt-0' />
      <div className="p-6 border border-gray-300 rounded-lg">
        <h1 className='text-2xl font-medium'>Sign in</h1>
        <div className="mt-4">
        <label className="font-semibold">Email or mobile phone number</label>
        <input type="text" className="border border-gray-300 text-gray-900 text-sm rounded-sm block w-80 h-8 p-2.5" required />
        </div>
        <button className="bg-yellow-400 h-8 w-80 hover:bg-yellow-500 text-black text-sm rounded-lg mt-4">
          Continue
        </button>
        <h1 className='text-sm mt-4'>By continuing, you agree to the Amazon <span className='text-blue-700 hover:underline hover:text-orange-400 mt-1 cursor-pointer'>Conditions <br/>of Use and Privacy Notice.</span></h1>
        <span className='inline-block text-sm mt-6 text-blue-700 hover:underline hover:text-orange-400 cursor-pointer'>-Need help?</span>
      </div>
      <h1 className='text-center text-gray-400 text-sm mt-4'>New to Amazon?</h1>
      <button className='border border-gray-300 p-1 rounded-lg w-96 shadow-lg mt-4'>Create your Amazon account</button>
      <div className='bg-gray-100 h-40 mt-8 text-center w-full'>
        <h1 className='text-xs text-blue-700 mt-3'> Terms and Privacy Notice  Send us feedback  Help </h1>
        <h1 className="text-xs mt-3">© 1996-2023, Amazon.com, Inc. or its affiliates</h1>
      </div>
    </div>
  )
}

export default Signin