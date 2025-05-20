import React from 'react'
import Prfile_image from '/Users/punith25/VS-CODE/PersonalWeb/frontend/src/assets/Profile_image.png'
import Home from '/Users/punith25/VS-CODE/PersonalWeb/frontend/src/Pages/Home/Home.jsx'
import Link from 'react-router-dom'
import './Navbar.css'
const NavBar = () => {
    return (
        <div className="Navbar">
            <div className="Navbar-left">
                <img className='Profile_image' src={Prfile_image} alt='Profile' />
                <h3>PUNiiiTH.</h3>
            </div>
            <div className="Navbar-right">
                <ul className="Nav-list">
                    <Link to={Home}><li>Home</li></Link>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar