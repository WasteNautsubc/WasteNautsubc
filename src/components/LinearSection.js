import React from 'react';
import '../App.css';
import './LinearSection.css';
 
function LinearSection() {
  const containerStyle = {
    backgroundImage: `url('/images/Linear.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className='linear-container' style={containerStyle}>

      <p1>the current paradigmal</p1>
      <p2>LINEAR ECONOMY</p2>
      <p3>is set up to:</p3>
      <p4>1.extract and exploit natural resources</p4>
      <p5>2. to make products with narrow useful lifetimes</p5>
      <p6>3. and discard them with little consideration.</p6>
      <div className='contact-btns'>
    
      </div>
    </div>
  );
}

export default LinearSection;