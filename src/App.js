import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

//Component Imports
import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/signUp' element={<SignUp/>}/>
          <Route exact path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  )
}
