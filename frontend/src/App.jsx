import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Skills from './pages/Skills'
import ContactUs from './pages/ContactUs'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Project />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/contact-us' element={<ContactUs />} />
    </Routes>
  )
}

export default App