import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
 
function HeroSection() {
  const containerStyle = {
    backgroundImage: `url('/images/homepage.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className='hero-container' style={containerStyle}>
    
      <h1>WASTE AS A RESOURCE</h1>
      <p1>we're an innovative and interdisciplinary team working towards a zero-waste future.</p1>
      <div className='hero-btns'>
        <Button
        to='https://www.instagram.com/ubcwastenauts/'
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          OUR INSTAGRAM
        </Button>
        <Button
        to='/projects'
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('Navigate to /signup')}
        >
          GET TO KNOW US
        </Button>
      </div>
      <p2>(keep scrolling for an overview.)</p2>
    </div>
  );
}

export default HeroSection;