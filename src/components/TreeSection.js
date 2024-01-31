import React from 'react';
import '../App.css';
import './TreeSection.css';
 
function TreeSection() {
  const containerStyle = {
    backgroundImage: `url('/images/tree.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className='tree-container' style={containerStyle}>

      <p1>in this work, we hold to our ethos of:</p1>
      <p2>integrity</p2>
      <p3>thinking is systems</p3>
      <p4>continuous improvement</p4>
      <p5>respect for people and planet</p5>
      <p6>seeing potential, not problems</p6>
      <div className='contact-btns'>
    
      </div>
    </div>
  );
}

export default TreeSection;