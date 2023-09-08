import React from 'react';
import Navbar from '../Navbar';
import Form from './Form';
import BottomNav from '../BottomNav'
import ImageAnimation from '../Contact/ImageAnimation';
import ContactUs from "../ContactUs";
import ContactAbout from './ContactAbout';
import ContactMode from './ContactMode';

const Services = () => {
  return <div>
    <Navbar/>
    <ImageAnimation/>
    <ContactAbout/>
    <Form/>
    <ContactMode/>
    <ContactUs/>
    <BottomNav/>
  </div>
};

export default Services;