import React from 'react';
import Navbar from '../Navbar';
import BottomNav from '../BottomNav';
import FacilitiesAbout from './FacilitesAbout';
import FacilitiesList from './FacilitiesList';
import ImageAnimation from '../Facilities/ImageAnimation';
import ContactUs from '../ContactUs';
import FacilitiesBullets from './FacilitiesBullets';
import FacilitiesEndText from './FacilitiesEndText';

const Facilities = () => {
  return <div>
    <Navbar/>
    <ImageAnimation/>
    <FacilitiesAbout/>
    <FacilitiesBullets/>
    <FacilitiesList/>
    <FacilitiesEndText/>
    <ContactUs/>
    <BottomNav/>
  </div>;
};

export default Facilities;