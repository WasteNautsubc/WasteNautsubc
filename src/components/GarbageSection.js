import React from 'react';
import '../App.css';
import './GarbageSection.css';
 
function GarbageSection() {
  const containerStyle = {
    backgroundImage: `url('/images/garbage.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className='garbage-container' style={containerStyle}>

      <p1>inevitably, this means that:</p1>
      <p2>1. we deplete our finite resources,</p2>
      <p3>2. we design only for product use, not considering</p3>
      <p4>production or end-of-life, and</p4>
      <p5>3. our waste accumulates in our natural systems, with</p5>
      <p6>immense and often unknown harms to the planet.</p6>
      <div className='contact-btns'>
    
      </div>
    </div>
  );
}

export default GarbageSection;