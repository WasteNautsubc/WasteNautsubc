import React from 'react';
import './ProjectsSection.css';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  return (
    <div className='ProjectsSection-container'>
      <p1>through our 5 projects, we seek to contribute to </p1>
      <p2>a zero-waste future through independent research.</p2>
      <p3>(click on the team icons to learn more.)</p3>
      <div className='columns-container'>
    <Link to="/projects" className='column'>TWR</Link>
    <Link to="/projects" className='column'>M&M</Link>
    <Link to="/projects" className='column'>TTC</Link>
    <Link to="/projects" className='column'>HEHS</Link>
    <Link to="/projects" className='column'>RPB</Link>
  </div>
  <div className='subcolumns-container'>
    <div className='subcolumn'>textile waste recycling</div>
    <div className='subcolumn'>mycelium mycopack</div>
    <div className='subcolumn'>tailings to concrete</div>
    <div className='subcolumn'>hybrid energy harvesting</div>
    <div className='subcolumn'>recycled paddleboard</div>
  </div>
    </div>
  );
};

export default ProjectsSection;
