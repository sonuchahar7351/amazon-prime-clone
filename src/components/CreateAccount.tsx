import React from 'react'
import prime from '../images/prime.png'

const CreateAccount = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={prime} alt="Prime" className='w-48 h-24 mt-0' />
            <div className="p-6 border border-gray-300 rounded-lg">
                <h1 className='text-2xl font-medium'>Create Account</h1>
                <div className="mt-2">
                    <label className="font-semibold">Your name</label>
                    <input type="text" className=" border border-gray-400 text-gray-900 focus-within:shadow-blue-400 shadow-sm text-sm rounded-sm block w-80 h-9 p-2.5" placeholder='First and last name' required />
                </div>
                <div className="mt-2">
                    <label className="font-semibold">Email</label>
                    <input type="text" className=" border border-gray-400 text-gray-900 text-sm rounded-sm block w-80 h-9 p-2.5" placeholder='Your email address' required />
                    <h1 className='text-xs text-blue-700 hover:underline hover:text-orange-400 mt-1 cursor-pointer'>Use your mobile number instead</h1>
                </div>
                <div className="mt-2">
                    <label className="font-semibold">Password</label>
                    <input type="password" className="border border-gray-400 text-gray-900 text-sm rounded-sm block w-80 h-9 p-2.5" placeholder='At least 6 characters' required />
                    <span className="text-xs">Passwords must be at least 6 characters</span>
                </div>
                <h1 className='text-sm mt-7'>To verify your email, we will send you a link. Click the <br /> link.</h1>
                <button className="bg-yellow-400 h-9 w-80 hover:bg-yellow-500 text-black text-sm rounded-lg mt-4">
                    Create your Amazon account
                </button>
                <h1 className='text-sm mt-4'>By creating an account, you agree to the Amazon <br /><span className='text-sm text-blue-700 hover:underline hover:text-orange-400 mt-1 cursor-pointer'>Conditions of Use and Privacy Notice.</span></h1>
                <hr className="mt-3" />
                <h1 className="text-sm mt-6">Already have an account? <span className="text-sm text-blue-700 hover:underline hover:text-orange-400 cursor-pointer">Sign in</span> </h1>
            </div>
            <h1 className='text-center text-gray-400 text-sm mt-4'>New to Amazon?</h1>
            <div className='bg-gray-100 h-40 mt-8 text-center w-full'>
                <h1 className='text-xs text-blue-700 mt-3'> Terms and Privacy Notice  Send us feedback  Help </h1>
                <h1 className="text-xs mt-3">© 1996-2023, Amazon.com, Inc. or its affiliates</h1>
            </div>
        </div>
    )
}

export default CreateAccount