import './App.css';
import { useEffect } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from '../src/components/Home/Home';
import About from '../src/components/About/About';
import Contact from '../src/components/Contact/Contact';
import Services from '../src/components/Services/Services';
import Facilities from './components/Facilities/Facilities';


function App() { 
  useEffect(() => {
    document.title = "Radhe Electronics";
  }, []);
  return (
    <div className="App">
      <BrowserRouter basename="/RadheElectronics">
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="services" element={<Services/>} />  
            <Route path="facilities" element={<Facilities/>} />  
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
