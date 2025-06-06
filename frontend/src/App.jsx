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
      <NavBar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="contact"><Contacts /></section>

    </>

  )
}

export default App