import React from 'react'
import Signin from './components/Signin'
import CreateAccount from './components/CreateAccount'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import Home from './components/Home'
import Details from './components/Details'

const App = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signup' element={<CreateAccount />} />
        <Route path='/login' element={<Signin />} />
        <Route path='/details' element={<Details/>}/>
      </Routes>
    </>
  )
}

export default App