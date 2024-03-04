import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-banner'>
          <div className='hero-content'>
            <h1>
              <span className='hero-name'>CyberPeace</span>{' '}
              <span className='pipe'> | </span>{' '}
              Center of Excellence
            </h1>
            <p className='hero-text'>
              A community-driven collaborative research and innovation framework for academia. 
              The objective is to harness the potential of young minds to explore and invent on prospective areas of technology solutions for 
              cyber security and combat.
              <br />
              <br />
              As a collaborative platform, the industry, government, and other groups can discuss their 
              problem statements and contribute to innovative goods and services. Our COEs, which are spread across the country, 
              focus on cutting-edge technology and cyberspace challenges. On and off, they pursue innovative ideas and build 
              prototypes and solutions on their own.
            </p>
            <div className='about-btn'>
              <Button content="Know More 👉" to="/center-of-excellence"/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero;