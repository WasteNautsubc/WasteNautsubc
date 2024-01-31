import React from 'react';
import '../App.css';
import './EnergyTitle.css';
 
function EnergyTitle() {
  const containerStyle = {
    backgroundImage: `url('/images/energy.jpeg')`,
  };

  return (
    <div className='E-container' style={containerStyle}>
    
      <h1>HYBRID ENERGY 
        <br/>HARVESTING SYSTEMS</h1>
    
    </div>
  );
}

export default EnergyTitle;