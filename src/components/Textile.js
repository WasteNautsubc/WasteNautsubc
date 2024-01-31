import React from 'react';
import './Textile.css';
import '../App.css';

const Textile = () => {

    const slidesUrl = 'https://docs.google.com/presentation/d/1y722GexTu6UxExhko24o3ixKqEHsaNzXM60GHBXKVOs/embed?start=true&loop=true&delayms=3000&rm=minimal';
  return (
    <div className='T-container'>
       <img src="./images/TWR.png" alt="TWR logo" />
      <p1>ABOUT</p1>
      <p2>Project Lead: Lael Lassmann</p2>
      <p4>Project Updates</p4>
      <p3>March 4, 2021
      <br />
Despite the current situation with Covid-19, we worked extensively on developing and refining experiments with various fabrics, such as cotton-paper making, closed-loop recycling for wool, and bleaching! 

Now we're starting our final report, and submitting LRA applications to start working remotely on our design!
<br />
<br />
<br />
December 31, 2021
<br />
The final report has been completed! It can be accessed here.</p3>

<iframe
        title="Google Slides Presentation"
        src={slidesUrl}
        width="50%"
        height="400px"
        frameBorder="0"
        allowFullScreen={true}
        mozAllowFullScreen={true}
        webkitAllowFullScreen={true}
      />


    </div>
  );
};

export default Textile;
