import React from 'react';
import '../App.css';
import './TextileTitle.css';
 
function TextileTitle() {
  const containerStyle = {
    backgroundImage: `url('/images/textile.jpg')`,
  };

  return (
    <div className='Textile-container' style={containerStyle}>
    
      <h1>TEXTILE WASTE RECYCLING</h1>
    
    </div>
  );
}

export default TextileTitle;