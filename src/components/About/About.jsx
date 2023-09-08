import React from 'react';
import Navbar from '../Navbar';
import AboutContent from './AboutContent';
import VisionMission from './VisionMission';
import CoreValues from './CoreValues';
import BottomNav from '../BottomNav';
import ImageAnimation from '../About/ImageAnimation';
import ContactUs from "../ContactUs";
import AboutAbout from './AboutAbout';

const About = () => {
  return <div>
    <Navbar/>
    <ImageAnimation/>
    <AboutAbout/>
    <AboutContent/>
    <VisionMission/>
    <CoreValues/>
    <ContactUs/>
    <BottomNav/>
   </div>;
};

export default About;