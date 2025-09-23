import { Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home' 
import React from 'react'
import Navbar from './Navbar'
import './style.css'

export default function App() {
  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}

 