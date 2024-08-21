import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';
import { PageNotFound } from './component';
import Login from './pages/Login';
import LoginForm from './pages/LoginForm';
import Locations from './pages/Locations';
import OnlineServices from './pages/OnlineServices';
import OurServices from './pages/OurServices';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/sign-up' element={<Login/>}/>
        <Route path='/location/:place' element={<Locations/>}/>       
         <Route path="/online/:service" element={<OnlineServices />} />
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/services' element={<OurServices/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App