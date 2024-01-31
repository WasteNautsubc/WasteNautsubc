
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
    
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>HOME</h2>
          </div>
          <div className='footer-link-items'>
            <h2>ABOUT</h2>
            <Link to='/projects'>Our Teams</Link>
            <Link to='/projects'>Execs</Link>
            <Link to='mailto:admin@wastenautsubc.com'>Contact Us</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>CONTACT</h2>
            <Link to='https://linktr.ee/UBCWasteNauts'>Opportunities</Link>
            <Link to='https://linktr.ee/UBCWasteNauts'>Join Us</Link>
            <Link to='/Sponsors_Advisors'>Sponsors & Advisors</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
          <Link to="/" className='navbar-logo'>
            <img
              src="./images/white logo.png"
              alt="Logo"
              style={{ width: '120px', height: 'auto' }}
            />
          </Link>
          </div>
    
          <div className='social-icons'>
          <Link
  className='social-icon-link linkedin'
  to='https://ca.linkedin.com/company/ubc-wastenauts'
  target='_blank'
  aria-label='LinkedIn'
>
  <i className='fab fa-linkedin' />
</Link>

            <Link
              className='social-icon-link instagram'
              to='https://www.instagram.com/ubcwastenauts/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
  className='social-icon-link tiktok'
  to='#' // Replace '#' with the correct TikTok URL or leave it empty
  target='_blank'
  aria-label='TikTok'
>
  <i className='fab fa-tiktok' />
</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;