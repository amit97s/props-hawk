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
import FinancialServices from './pages/FinancialServices';
import RentAgreement from './pages/RentAgreement';
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
         {/* <Route path="/online/:service" element={<OnlineServices />} /> */}
         <Route path="/online/:serviceId" element={<OnlineServices/>} />
         {/* <Route path="/commercial/:finance" element={<FinancialServices/>} /> */}
         <Route path="/financial/:finance" element={<FinancialServices />} />
        <Route path='/location/:place' element={<Locations/>}/>       
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/services' element={<OurServices/>}/>
        <Route path='/rent-agreement' element ={<RentAgreement/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App