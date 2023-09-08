import { Link } from "react-router-dom";
import "./Navbar.css"
import React, { useState, useEffect } from 'react';
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} `}>
      <Link className="navbar-logo" to="/">RADHE ELECTRONICS</Link>
      <div className="menu-icon" onClick={handleShowNavbar}>
          <text>|||</text>
      </div>
      <div className={`nav-elements ${showNavbar && 'active'}`}>
        <ul>
          <li><Link className="nav-link" to="/" onClick={() => {window.scroll({top: 0,left: 0});}}>Home</Link></li>
          <li><Link className="nav-link" to="/about" onClick={() => {window.scroll({top: 0,left: 0});}}>About</Link></li>
          <li><Link className="nav-link" to="/services" onClick={() => {window.scroll({top: 0,left: 0});}}>Services</Link></li>
          <li><Link className="nav-link" to="/facilities" onClick={() => {window.scroll({top: 0,left: 0});}}>Facilities</Link></li>
          <li><Link className="nav-link" to="/contact" onClick={() => {window.scroll({top: 0,left: 0});}}>Contact</Link></li>
        </ul>
      </div>  
    </nav>
  );
};

export default Navbar;
