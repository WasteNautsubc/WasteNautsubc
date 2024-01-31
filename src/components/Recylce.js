import React from 'react';
import './Recycle.css';
import '../App.css';

const Recycle = () => {

  return (
    <div className='RPB-container'>
       <img className="RPB" src="./images/RPB.png" alt="RPB" />
      <p1>ABOUT</p1>
      <p2>Project Lead: Alice Martins, Lillian McCallum</p2> 
      <p5>The goal of this project is to make a paddle board made out of recycled materials. This project encompasses the idea of a circular economy and raises awareness towards resource management which is a necessary part of a material’s life cycle. While paddle boarding is a great way to spend time on the water and appreciate the nature that surrounds us, paddle boards often have very negative environmental impacts due to the expanded polystyrene (the foam inside the board) that they are made of. In this project, we will be using materials that aren't typically recycled due to inefficient recycled processes (such as plastic and aluminum cans) to build the board in order to reuse the waste around us.
</p5>

      <p4>Project Updates</p4>
      <p3>March 4, 2021
      <br />
      We have been finalizing our report for our paddleboard, as well as conducting more stress testing on the material. To create the various parts of the design, we have been working on the molds that will shape the final product!
      <br />
While collaborating asynchronously, we are also planning for a SUSTAINABILITYxTalks industry night featuring Sustainable Youth Canada to talk about sustainability and the ocean! 
<br />

</p3>
<img className="RPB1" src="./images/RPB1.png" alt="RPB1" style={{ width: '15%' }} />
<img className="RPB2" src="./images/RPB2.png" alt="RPB2" style={{ width: '15%' }} />



    </div>
  );
};

export default Recycle;
