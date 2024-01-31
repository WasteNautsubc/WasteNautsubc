import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './LearnSection.css';
 
function LearnSection() {
  const containerStyle = {
    backgroundImage: `url('/images/geese.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className='learn-container' style={containerStyle}>
      <p1>what would you like to learn today?</p1>
      <div className='learn-btns'>
      <Button
        to='https://www.instagram.com/ubcwastenauts/'
         className='btns'
         buttonStyle='btn--primary'
         buttonSize='btn--large'
         onClick={console.log('Navigate to https://www.instagram.com/ubcwastenauts/')}
       >
          OUR INSTAGRAM
        </Button>
        <Button
          as={Link} // Use Link instead of anchor tag
          to='/projects'
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          OUR TEAMS
        </Button>
        <Button
          as={Link} // Use Link instead of anchor tag
          to='/Sponsors_Advisors'
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          OUR SPONSORS
        </Button>
      </div>
      <p2>(or, keep scrolling to read on.)</p2>
    </div>
  );
}

export default LearnSection;