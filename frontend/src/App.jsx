import React from 'react'
import NavBar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Contacts from './Pages/contact/contact'
import About from './Pages/About/About'
import Portfolio from './Pages/Portfolio/Portfolio'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
     

    </>

  )
}

export default App