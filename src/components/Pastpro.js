import React from 'react';
import { Link } from 'react-router-dom';
import './Pastpro.css';
import '../App.css';


const Pastpro = () => {
  return (
    <div className='Pastpro-container'>
      <Link to="/past-projects" className='PastP'>
      <p2>Take a Look at Our Past Projects!</p2>
      </Link>
    </div>
  );
};

export default Pastpro;
