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
                    <Link className='Route-Link' to='/'>Home</Link>
                    <Link className='Route-Link' to='/About'>About</Link>
                    <Link className='Route-Link' to='/Portfolio'>Portfolio</Link>
                    <Link className='Route-Link' to='/Contacts'>Contact</Link>

                </ul>

            </div>
        </div>
    )
}

export default NavBar