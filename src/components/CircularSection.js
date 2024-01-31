import React from 'react';
import '../App.css';
import './CircularSection.css';
 
function CircularSection() {
  const containerStyle = {
    backgroundImage: `url('/images/circular.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className='circular-container' style={containerStyle}>

      <p1>this is why we join others in advocating for a</p1>
      <p2>CIRCULAR ECONOMY</p2>
      <p3>in which</p3>
      <p4>1. we ensure our natural resources are conserved,</p4>
      <p5>2. we design for th entire life cycle of products, and</p5>
      <p6>3. we divert waste back into the system as resource.</p6>
      <div className='contact-btns'>
    
      </div>
    </div>
  );
}

export default CircularSection;