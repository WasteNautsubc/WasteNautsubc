import React from 'react';
import '../App.css';
import './TailingsTitle.css';
 
function TailingsTitle() {
  const containerStyle = {
    backgroundImage: `url('/images/Tailing.png')`,
  };

  return (
    <div className='Tailings-container' style={containerStyle}>
    
      <h1>TAILINGS TO CONCRETE</h1>
    
    </div>
  );
}

export default TailingsTitle;