import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [scrolling, setScrolling] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);


  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className={`navbar ${scrolling ? 'scrolling' : ''}`}>
        <div className={`navbar-container ${scrolling ? 'hidden' : ''}`}>
          <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
            <img
              src="./images/white logo.png"
              alt="Logo"
              style={{ width: '120px', height: 'auto' }}
            />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                About us
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Sponsors_Advisors' className='nav-links' onClick={closeMobileMenu}>
                Sponsors
              </Link>
            </li>
          
            <li className='nav-item'>
              <Link to='mailto:admin@wastenautsubc.com' className='nav-links-mobile' onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
          {button && (
            <Button to='mailto:admin@wastenautsubc.com' buttonStyle='btn--outline'>
              CONTACT
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
