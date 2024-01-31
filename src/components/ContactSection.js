import React from 'react';
import '../App.css';
import { Button } from './Button';
import './ContactSection.css';
 
function ContactSection() {
  const containerStyle = {
    backgroundImage: `url('/images/mountain.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className='contact-container' style={containerStyle}>

      <p1>interested in working with us? we'd love to chat!</p1>
      <p2>we're always looking for educational partners,</p2>
      <p3>sponsors, advisors, and team members!</p3>
      <div className='contact-btns'>
        <Button
        to='mailto:admin@wastenautsubc.com'
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('Navigate to /contact')}
        >
          CONTACT
        </Button>
      </div>
    </div>
  );
}

export default ContactSection;