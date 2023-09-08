import React from 'react';
import Navbar from '../Navbar';
import BottomNav from '../BottomNav';
import ServicesAbout from './ServicesAbout';
import ServicesList from './ServicesList';
import ImageAnimation from '../Services/ImageAnimation';
import ContactUs from "../ContactUs";
import ServicesEndText from './ServicesEndText';

const Services = () => {
  return <div>
    <Navbar/>
    <ImageAnimation/>
    <ServicesAbout/>
    <ServicesList/>
    <ServicesEndText/>
    <ContactUs/>
    <BottomNav/>
  </div>;
};

export default Services;