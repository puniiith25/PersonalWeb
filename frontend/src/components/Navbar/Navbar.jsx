import React from 'react'
import Prfile_image from '/Users/punith25/VS-CODE/PersonalWeb/frontend/src/assets/Profile_image.png'

import './Navbar.css'
import { Link } from 'react-router-dom'
const NavBar = () => {

    return (
        <div className="Navbar">
            <div className="Navbar-left">
                <img className='Profile_image' src={Prfile_image} alt='Profile' />
                <h3>PUNiiiTH.</h3>
            </div>
            <div className="Navbar-right">
                <ul className="Nav-list">
                    <li><a className='Route-Link' href="#home">Home</a></li>
                    <li><a className='Route-Link' href="#about">About</a></li>
                    <li><a className='Route-Link' href="#portfolio">Portfolio</a></li>
                    <li><a className='Route-Link' href="#contact">Contact</a></li>

                </ul>

            </div>
        </div>
    )
}

export default NavBar