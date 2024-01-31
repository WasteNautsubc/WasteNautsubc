import React from 'react';
import './TWRSection.css';

const TWRSection = () => {
  return (
    <div className='TWR-container'>
      <a1 href="/textile-waste-recycling" className='TextileWaste'>
       <img src="./images/TWR.png" />
       </a1>
      <p1> CURRENT PROJECTS (2023-24 DESIGN CYCLE)</p1>
      <a href="/textile-waste-recycling" className='TextileWaste'>
      <p2>TEXTILE WASTE RECYCLING</p2></a>
      
      <p3>The goal of this project is to find a way to create value from textile waste and educate</p3>
        <p4>other students on sustainable fashion practices.</p4>
    
    </div>
  );
};

export default TWRSection;
