import React from 'react';
import './TailingsTC.css';
import '../App.css';

const TailingsTC = () => {
  const url = 'https://drive.google.com/file/d/1eUr1SMFZDJsQGotwZGemeOwRBfh1oVW2/view?usp=sharing';
  const fileId = url.match(/\/d\/(.+?)\/view/)[1];
  const pdfUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <div className='TTC-container'>
       <img className="TTC" src="./images/TTC.png" alt="TTC" />
      <p1>ABOUT</p1>
      <p2>Project Lead: Ava Wang, Li Yen Cheng</p2> 
      <p5>This project aims to produce high quality composite concrete from mine tailings which mainly contain metals. As a result, metals will be trapped in the composite concrete material and will not dissolve in nature. Like the well known pre concrete mix materials, different techniques and proportions will be tried during the research procedure. Also, conventional concrete is an expensive material. For the concrete production lots of high quality mineral rich soil is being used. If we can use mine tailings as a concrete base material, we can decrease the production cost of concrete and stop usage of proper mineral rich soil.

Our main goal is to produce cheaper, stronger and more sustainable concrete. Unlike the conventional concrete producers, we want to use mine waste with metal content in it as a base material to produce high quality concrete.

Our mission is to change the production cycle of the most used composite material in the world, which is concrete.
</p5>

      <p4>Project Updates</p4>
      <p3>September 9, 2023
      <br />
      Excited to share some significant progress from our recent efforts! We have successfully developed a ratio that exhibits superior compressive properties when compared to conventional concrete. This achievement marks a significant milestone for our team and the potential impact of our project. However, our work is far from complete. We are currently focused on conducting a comprehensive analysis of other properties of our concrete samples to ascertain if they outperform conventional concrete in those aspects as well, and continue research on the economics of our project.
<br />
<br />
March 4, 2021
<br />
Our team has investigated the properties and assessments of tailings and using them as an aggregate. Now we have been working on assessing the economical viability of the project based on location of production plants and transportation costs. We have also been designing a lab procedure in order to conduct our experiments!</p3>
<img className="TTCTeamImage" src="./images/TTCTeam.png" alt="TTC Team" style={{ width: '40%' }} />
<iframe
        title="TTC"
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

export default TailingsTC;
