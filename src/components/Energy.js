import React from 'react';
import './Energy.css';
import '../App.css';

const Energy = () => {
 
  return (
    <div className='H-container'>
       <img className="HEHS" src="./images/HEHS.png" alt="HEHS" />
      <p1>ABOUT</p1>
      <p2>Project Lead: Ajay Aujla, Kingley Moore</p2> 
      <p5>With the increased usage of IoT devices around the world, energy requirements have been on a constant rise and Energy Harvesting can build towards an effective solution as a replacement to chemical batteries. In this project, we will be exploring in-depth 4 different energy harvesting mechanisms: the piezoelectric, pyroelectric, thermoelectric and triboelectric effects, to design and create wearable and applicable energy harvesting systems. We will be creating floor tiles that harvest piezoelectric energy from footsteps.

<br /> 
<br /> Our aim as a sub-team is to successfully bring one of the fastest rising sustainable technologies to UBC via introducing the use of small energy harvesting devices in students’ daily lives.
</p5>

      <p4>Project Updates</p4>
      <p3>March 4, 2021
      <br />
      After extensive and thorough evaluation, our team finalized on piezoelectric floor tiles, that will harvest energy from footsteps (such as on sidewalks). Now we are bringing the idea to life by researching components and materials that will increase efficiency of energy output!
<br />

</p3>
<img className="Energ" src="./images/HE.png" alt="Energ" style={{ width: '30%' }} />



    </div>
  );
};

export default Energy;
