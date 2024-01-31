import React from 'react';
import '../App.css';
import './OUTLABSection.css';
import { Link } from 'react-router-dom';
 
function OUTLABSection() {
  const containerStyle = {
    backgroundImage: `url('/images/OutreachLab.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

    return (
      <div className='OUTLAB-container' style={containerStyle}>
        <p1>our non-technical teams facilitate our success, keep us safe, </p1>
        <p2>and educate the public on sustainable practices</p2>
        <div className='columns-container2'>
    <Link to="/outreach" className='column2'>OUT</Link>
    <Link to="/lab-management" className='column2'>LAB</Link>
    </div>
    <div className='subcolumns-container2'>
    <div className='subcolumn2'>outreach</div>
    <div className='subcolumn2'>lab management</div>
    </div>
      </div>
    );
  };
  
  export default OUTLABSection;
  