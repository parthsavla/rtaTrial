import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

//Component Imports
import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'
import HomePrototype from './components/HomePrototype'
import AccoutPage from './components/AccoutPage'
import StudentDashboard from './components/StudentDashboard'
import SupervisorDashboard from './components/SupervisorDashboard'
import ResearchDasboard from './components/ResearchDasboard'
import AdminDasboard from './components/AdminDasboard'

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/signUp' element={<SignUp/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/account' element={<AccoutPage/>}/>
          <Route exact path='/hproto' element={<HomePrototype/>}/>
          <Route exact path='/studentDashboard' element={<StudentDashboard/>}/>
          <Route exact path='/supervisorDashboard' element={<SupervisorDashboard/>}/>
          <Route exact path='/researchDasboard' element={<ResearchDasboard/>}/>
          <Route exact path='/adminDashboard' element={<AdminDasboard/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  )
}
