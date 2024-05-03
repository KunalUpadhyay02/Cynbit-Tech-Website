import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We Ensure the best services to the client.</h1>
            <p>Our Cutting-edge</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt=''/></button>
        </div>
    </div>
  )
}

export default Hero