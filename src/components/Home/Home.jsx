import React from "react";
import Navbar from '../Navbar';
import ImageAnimation from './ImageAnimation';
import HomeAbout from './HomeAbout';
import HomeExpertise from './HomeExpertise';
import HomeContent from './HomeContent';
import BottomNav from '../BottomNav';
import ContactUs from "../ContactUs";
import OurTeam from "./OurTeam";
function Home() { 
  return (
    <div>
      <Navbar/>
      <ImageAnimation/>
      <HomeAbout/>
      <HomeExpertise/>
      <HomeContent/>
      <OurTeam/>
      <ContactUs/>
      <BottomNav/>
    </div>
  );
}

export default Home;
