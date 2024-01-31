import React from 'react';
import './Mycelium.css';
import '../App.css';

const Mycelium = () => {

    const url = 'https://drive.google.com/file/d/16b_4vdNjLSDKgIRU6pwh148utE4UORQo/view?usp=sharing';
  const fileId = url.match(/\/d\/(.+?)\/view/)[1];
  const pdfUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <div className='M-container'>
       <img src="./images/myco.png" alt="MM logo"/>
      <p1>ABOUT</p1>
      <p2>Founders: Ava Wang and Lillian McCallum
        </p2>
      <p3>This project investigates mycelium strands which can help mitigate the amount of water, energy, and chemicals needed to create paper packaging products. The idea is to promote the adoption of eco-friendly alternatives using biodegradable materials like mycelium to reduce plastic production and  promote global awareness for a cleaner, more sustainable world.</p3>
    <p4>Project Leads
        Jordan Thompson
        Jasmine Fung
    </p4>

    <iframe
        title="Papercrete Timeline"
        src={pdfUrl}
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

export default Mycelium;
