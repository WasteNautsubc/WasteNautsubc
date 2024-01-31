import React from 'react';
import './Clipboard.css';

const Clipboard = () => {
    const url = 'https://drive.google.com/file/d/1-GxydjGcHGzS4HwaSE5T39hm1w-XMi-6/view?usp=sharing';
  const fileId = url.match(/\/d\/(.+?)\/view/)[1];
  const pdfUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  const url2 = 'https://drive.google.com/file/d/1bCPYrjbPgFeQjTJAHMWLxFX-4Uk2jXhl/view?usp=sharing';
  const fileId2 = url2.match(/\/d\/(.+?)\/view/)[1];
  const pdfUrl2 = `https://drive.google.com/file/d/${fileId2}/preview`;

  return (
    <div className='Clipboard-container'>

      <h1>2019-20 DESIGN CYCLE</h1>
      <p1>RECYCLED PLASTIC CLIPBOARD</p1>
      <p2>A strong need for closing the loop on campus plastic was identified long before UBC WasteNauts decided to choose this topic. In January 2020, an official intra-team competition was started in order to educate the current team on circular economy while conducting R&D on a product with tangible community benefit: a recycled plastic clipboard.</p2>
    
      <iframe
        title="Comprehensive Report"
        src={pdfUrl}
        width="15%"
        height="300px"
        frameBorder="0"
        allowFullScreen={true}
        mozAllowFullScreen={true}
        webkitAllowFullScreen={true}
      />
<iframe
          title="Infographic"
          src={pdfUrl2}
          className="infographic-frame" 
          width="15%" // Adjust the width as needed
          height="300px"
          allowFullScreen={true}
          mozAllowFullScreen={true}
          webkitAllowFullScreen={true}
        />
    </div>
  );
};
export default Clipboard;
