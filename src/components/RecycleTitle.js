import React from 'react';
import '../App.css';
import './RecycleTitle.css';
 
function RecycleTitle() {
  const containerStyle = {
    backgroundImage: `url('/images/PB.jpg')`,
  };

  return (
    <div className='P-container' style={containerStyle}>
    
      <h1>RECYCLED PLASTIC 
        <br/>PADDLE BOARD </h1>
    
    </div>
  );
}

export default RecycleTitle;