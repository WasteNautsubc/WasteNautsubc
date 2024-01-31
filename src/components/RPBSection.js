import React from 'react';
import './RPBSection.css';
import '../App.css';


const RPBSection = () => {
  return (
    <div className='RPB-container'>
      <Link to="/recycled-plastic-paddle-board" className='PaddleB'>
       <img src="./images/RPB.png" alt="RPB logo"/>
       </Link>
       <Link to="/recycled-plastic-paddle-board" className='PaddleB'>
      <p1>RECYCLED COMPOSITE PADDLE BOARD</p1>
      </Link>
      <p3>The goal of this project is to make a paddle board made out of recycled materials.</p3>
    </div>
  );
};

export default RPBSection;
