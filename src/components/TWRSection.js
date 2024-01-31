import React from 'react';
import { Link } from 'react-router-dom';
import './TWRSection.css';

const TWRSection = () => {
  return (
    <div className='TWR-container'>
     <Link to="/textile-waste-recycling" className='TextileWaste'>
       <img src="./images/TWR.png" alt="TWR logo"/>
       </Link>
      <p1> CURRENT PROJECTS (2023-24 DESIGN CYCLE)</p1>
      <Link to="/textile-waste-recycling" className='TextileWaste'>
      <p2>TEXTILE WASTE RECYCLING</p2>
      </Link>
      <p3>The goal of this project is to find a way to create value from textile waste and educate</p3>
        <p4>other students on sustainable fashion practices.</p4>
    
    </div>
  );
};

export default TWRSection;
