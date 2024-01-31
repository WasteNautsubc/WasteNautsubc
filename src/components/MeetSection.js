import React from 'react';
import '../App.css';
import './MeetSection.css';
 
function MeetSection() {
  const containerStyle = {
    backgroundImage: `url('/images/sunset.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className='meet-container' style={containerStyle}>
    
      <h1>MEET OUR TEAMS</h1>
      <p1>With 5 technical teams, two support teams, and our executive team,</p1>
      <p1>our activities are great in both breadth and depth.</p1>
      <p1>Meet the people that make it all happen.</p1>
    
      <p2>(keep scrolling for an overview.)</p2>
    </div>
  );
}

export default MeetSection;