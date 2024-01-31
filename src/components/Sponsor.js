import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Sponsor.css';
 
function Sponsor() {
  const containerStyle = {

  };

  return (
    <div className='sponsor-container' style={containerStyle}>
      <p1>WE ARE RECRUITING NOW</p1>
      <div className='sposor-btns'>
      <Button
        to='https://forms.gle/JeV32cfoc1kCxgna8'
         className='btns'
         buttonStyle='btn--primary'
         buttonSize='btn--large'
         onClick={console.log('Navigate to https://forms.gle/JeV32cfoc1kCxgna8')}
       >
          Sponsor Us Now
        </Button>
        </div>

        <div className='sposor-btns2'>
        <Button
        to='https://drive.google.com/file/d/1hy5l9uAP9GOLtE1DbuJXOD7Z0FCMCSox/view?usp=sharing'
         className='btns'
         buttonStyle='btn--primary'
         buttonSize='btn--large'
         onClick={console.log('Navigate to https://drive.google.com/file/d/1hy5l9uAP9GOLtE1DbuJXOD7Z0FCMCSox/view?usp=sharing')}
       >
          Sponsorship Package
        </Button>
      </div>
      <p2>(or, keep scrolling to read on.)</p2>
    </div>
  );
}

export default Sponsor;