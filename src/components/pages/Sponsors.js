import React from 'react';
import '../../App.css';
import ExecSection from '../ExecSection';
import Footer from '../Footer';
import Sponsor from '../Sponsor';
import Eng from '../Eng';
import Lafarge from '../Lafarge';
import Riotinto from '../Riotinto';
import BBA from '../BBA';
import Canfor from '../Canfor';
import Advisors from '../Advisors';


function Sponsors() {
    return (
      <>
      <Sponsor />
      <Eng />
      <Lafarge />
      <Riotinto />
      <BBA />
      <Canfor />
      <Advisors />
      <Footer />
      <ubcSection />
      </>
    );
  }
  
  export default Sponsors;