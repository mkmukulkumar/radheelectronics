import { Link } from "react-router-dom";
import "./ContactUs.css"
import phone from "../assets/phone.svg"
import mail from "../assets/mail.svg"
import location from "../assets/location.svg"
const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <text className="contact-us-heading h1-heading">GET IN TOUCH WITH US TODAY</text>
      <div className="contact-us-inner-container">
              <div className="contact-us-inner-first-container">
                      <text className="contact-us-para">
                            Whether you are a startup with an innovative idea or an established player seeking to enhance your products, 
                            Radhe Electronics is your partner of choice. Explore our website to learn more about our services, facilities, 
                            and success stories.
                      </text>
                      <div className="contact-us-button-container">
                            <Link className="contact-us-contactbutton rightmrgn" to="/contact"  onClick={() => {window.scroll({top: 0,left: 0});}}>Contact Us</Link>
                            <Link className="contact-us-explorebutton leftmrgn" to="/services" onClick={() => {window.scroll({top: 0,left: 0});}}>Explore</Link>
                      </div>
                      <div className="contact-us-last-para">
                      <text>Get in touch with us today to discuss how we can bring your electronic manufacturing vision to life.<br/>Your Success, Our Commitment - Radhe Electronics</text> 
                      </div>   
              </div>
              <div className="contact-us-second-container">
                  <div className="contact-us-inner-second-container">
                        <div className="contact-us-inner-second-container-icon">
                          <img className="contact-us-inner-second-location-icon" src={location}/>
                        </div>
                        <div className="contact-us-inner-second-container-set">
                            <text className="h2-heading">Location</text>
                            <text className="contact-us-second-para">DIC Industrial Area Baddi, District Solan, Himachal Pradesh, 173205</text>
                        </div>                
                  </div>
                  <div className="contact-us-inner-second-container">
                        <div className="contact-us-inner-second-container-icon">
                          <img className="contact-us-inner-second-mail-icon" src={mail}/>
                        </div>
                        <div className="contact-us-inner-second-container-set">
                            <text className="h2-heading">Mail</text>
                            <text className="contact-us-second-para">ramkishorsmt@gmail.com</text>
                        </div>                
                  </div>
                  <div className="contact-us-inner-second-container">
                        <div className="contact-us-inner-second-container-icon">
                          <img className="contact-us-inner-second-phone-icon" src={phone}/>
                        </div>
                        <div className="contact-us-inner-second-container-set">
                            <text className="h2-heading">Phone</text>
                            <text className="contact-us-second-para">(+91)8072929102</text>
                        </div>                
                  </div>
              </div>
      </div>         
    </div>
  );
};

export default ContactUs;