import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import ProjectsSection from '../ProjectsSection';
import OutreachLabSection from '../OutreachLabSection';
import { Carousel } from '../Carousel';

import data from '../../data/carouselData.json';
import ContactSection from '../ContactSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <OutreachLabSection />
      <Carousel data={data} />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;
