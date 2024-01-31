import React from 'react';
import './Advisors.css';

const Advisors = () => {
  return (
    <div className='Advisors-container'>
    <h1>OUR ADVISORS</h1>
    
      <div className='advisors-images-container'>
      <a href="https://www.linkedin.com/in/daan-maijer-84371b12/?originalSubdomain=ca" className='image-text-container1'>
        <img src='/images/Daan.png' alt='Advisor  1' className='exec-image' />
        <p className='image-text'>DR. DAAN MAIJER</p>
        <p className='image-text'>Professor and Department Head
        <br />(Materials Engineering)</p>
        </a>
        <a href="https://www.linkedin.com/in/jon-nakane/?originalSubdomain=ca/" className='image-text-container2'>
        <img src='/images/Jon.jpeg' alt='Advisor  2' className='exec-image' />
        <p className='image-text'>DR. JON NAKANE</p>
        <p className='image-text'>Program Director and Academic Advisor
         <br />(Integrated Engineering)</p>
        </a>
        <a href="https://www.linkedin.com/in/love-ese-chile/?originalSubdomain=ca/" className='image-text-container3'>
        <img src='/images/Love.jpeg' alt=' Advisor 3' className='exec-image' />
        <p className='image-text'>DR. LOVE-ESE CHILE</p>
        <p className='image-text'>PhD, BioPlastics Researcher</p>
        </a>
      </div>

    </div>
  );
};

export default Advisors;
