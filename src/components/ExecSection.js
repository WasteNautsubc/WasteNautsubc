import React from 'react';
import './ExecSection.css';

const ExecSection = () => {
  return (
    <div className='Exec-container'>
    <h1>EXECUTIVE TEAM </h1>
    
      <div className='exec-images-container'>
      <a href="https://www.linkedin.com/in/sgajic/" className='image-text-container1'>
        <img src='/images/Sasha.jpg' alt='Team Member 1' className='exec-image' />
        <p className='image-text'>Sasha Gajic</p>
        <p className='image-text'>Co-Captain</p>
        </a>
        <a href="https://www.linkedin.com/in/pelin-tezcan-5477851ba/" className='image-text-container2'>
        <img src='/images/Pelin.jpg' alt='Team Member 2' className='exec-image' />
        <p className='image-text'>Pelin Tezcan</p>
        <p className='image-text'>Co-Captain</p>
        </a>
        <a href="https://www.linkedin.com/in/andrew-feng/" className='image-text-container3'>
        <img src='/images/Andrew.jpg' alt='Team Member 3' className='exec-image' />
        <p className='image-text'>Andrew Feng</p>
        <p className='image-text'>VP Finance</p>
        </a>
        <a href="https://www.linkedin.com/in/hugowubc/" className='image-text-container4'>
        <img src='/images/Hugo.jpeg' alt='Team Member 4' className='exec-image' />
        <p className='image-text'>Hugo Wu</p>
        <p className='image-text'>VP External</p>
        </a>
      </div>
    
      <div className='exec-images-container-2'>
      <div className='image-text-container5'>
      <a href="https://www.linkedin.com/in/pearl-dhingra/" className='image-text-container5'>
        <img src='/images/Pearl.jpg' alt='Team Member 5' className='exec2-image' />
        <p className='image-text'>Pearl Dhingra</p>
        <p className='image-text'>Program Manager</p>
        </a>
        </div>
        <div className='image-text-container6'>

        <img src='/images/jena.png' alt='Team Member 6' className='exec2-image' />
        <p className='image-text'>Jena Tseng</p>
        <p className='image-text'> Lab Manager - Team Safety Officer</p>
       
        </div>
        <div className='image-text-container7'>
        <img src='/images/blank.png' alt='Team Member 7' className='exec2-image' />
        <p className='image-text'>XXX XXX</p>
        <p className='image-text'> VP Internal</p>
        </div>
      </div>

    </div>
  );
};

export default ExecSection;
