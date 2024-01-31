import React from 'react';
import '../App.css';
import './MyceliumTitle.css';
 
function MyceliumTitle() {
  const containerStyle = {
    backgroundImage: `url('/images/mushroom.png')`,
  };

  return (
    <div className='Title-container' style={containerStyle}>
    
      <h1>MYCELIUM MYCOPACK</h1>
    
    </div>
  );
}

export default MyceliumTitle;