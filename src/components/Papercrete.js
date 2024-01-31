import React from 'react';
import './Papercrete.css';

const Papercrete = () => {
    const url = 'https://drive.google.com/file/d/1ZtW6Fx5-RragxsnQGv-YIpIsxZrsxKTI/view?usp=sharing';
  const fileId = url.match(/\/d\/(.+?)\/view/)[1];
  const pdfUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  const url2 = 'https://drive.google.com/file/d/1gsyMV-n0fQIfApLIpUMxXJoh9wIIJUGC/view?usp=sharing';
  const fileId2 = url2.match(/\/d\/(.+?)\/view/)[1];
  const pdfUrl2 = `https://drive.google.com/file/d/${fileId2}/preview`;

  return (
    <div className='Papercrete-container'>

      <h1>2020-23 DESIGN CYCLE</h1>
      <p1>PAPERCRETE BENCH/STOOL</p1>
      <p2>This project investigates green concrete using cement substitutes such as waste paper, and aims to reduce paper waste in our community.</p2>
    
      <iframe
        title="Papercrete Timeline"
        src={pdfUrl}
        width="15%"
        height="300px"
        frameBorder="0"
        allowFullScreen={true}
        mozAllowFullScreen={true}
        webkitAllowFullScreen={true}
      />

<iframe
          title="Research Overview"
          src={pdfUrl2}
          width="15%" // Adjust the width as needed
          height="300px"
          style={{ margin: '-300px 420px' }}
          allowFullScreen={true}
          mozAllowFullScreen={true}
          webkitAllowFullScreen={true}
        />
    </div>
  );
};
export default Papercrete;
