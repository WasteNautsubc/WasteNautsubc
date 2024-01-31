import React from 'react';
import '../../App.css';
import MeetSection from '../MeetSection';
import TWRSection from '../TWRSection';
import MMSection from '../MMSection';
import TTCSection from '../TTCSection';
import HEHSSection from '../HEHSSection';
import RPBSection from '../RPBSection';
import OUTLABSection from '../OUTLABSection';
import ExecSection from '../ExecSection';
import Footer from '../Footer';
import HowprojectSection from '../Howproject';
import Pastpro from '../Pastpro';


function Team() {
    return (
      <>
       <MeetSection />
       <HowprojectSection />
       <TWRSection />
       <MMSection />
       <TTCSection />
       <HEHSSection />
       <RPBSection />
       <Pastpro />
       <OUTLABSection />
       <ExecSection />
       <Footer />
      </>
    );
  }
  
  export default Team;