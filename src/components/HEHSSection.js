import React from 'react';
import { Link } from 'react-router-dom';
import './HEHSSection.css';

const HEHSSection = () => {
  return (
    <div className='HEHS-container'>
      
      <Link to="/hybrid-energy-harvesting-systems" className='HEnergy'>
       <img src="./images/HEHS.png" alt="HEHS logo"/>
       </Link>
       <Link to="/hybrid-energy-harvesting-systems" className='HEnergy'>
      <p1>HYBRID ENERGY HARVESTING SYSTEMS</p1>
      </Link>
      <p3>Our aim is to successfully bring one of the fastest rising sustainable technologies to UBC by</p3>
      <p4>introducing the use of small energy harvesting devices in students’ daily lives.</p4>
    </div>
  );
};

export default HEHSSection;
