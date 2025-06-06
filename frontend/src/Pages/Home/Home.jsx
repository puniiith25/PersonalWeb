import React from 'react'
import './Home.css'
import Profile_img from '../../assets/Profile_image.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Home = () => {

    const [text] = useTypewriter({
        words: ['A Web Developer.', 'An App Developer.', ' I Love to develop.'],
        loop: true,
    });

    return (
        <div className="Home">
            <div className='main-img' > <img src={Profile_img} alt="" /></div>
            <div className="Main-text">
                <p id='Hi'>Hi There!</p>
                <h3>I am Punitha KM</h3>
                <h3> <span>{text}|</span></h3>
                <p id="though">A great website is not built in code alone — it's crafted through empathy, usability, and a touch of creativity.</p>
            </div>
        </div>
    )
}

export default Home