import React from 'react';
import './MMSection.css';

const MMSection = () => {
  return (
    <div className='MM-container'>
      <Link to="/mycelium-mycopack" className='Mycopack'>
       <img src="./images/MM.png" alt="MM logo" />
       </Link>
       <Link to="/mycelium-mycopack" className='Mycopack'>
      <p1>MYCELIUM MYCOPACK</p1>
      </Link>
      <p3>This project investigates mycelium strands which can help mitigate the amount of water,</p3>
      <p4>energy, and chemicals needed to create paper packaging products. The idea is to promote the</p4>
      <p5>adoption of eco-friendly alternatives using biodegradable materials like mycelium to reduce</p5>
      <p6>plastic production and  promote global awareness for a cleaner, more sustainable world.</p6>
    </div>
  );
};

export default MMSection;
