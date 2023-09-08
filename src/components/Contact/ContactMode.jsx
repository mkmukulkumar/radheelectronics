import "./ContactMode.css"
import contactlocation from "../../assets/contactlocation.svg"
import contactmail from "../../assets/contactmail.svg"
import contactphone from "../../assets/contactphone.svg"
const ContactMode = () => {
  return (
    <div className="contactmode-outer-container">
      <div className="contactmode-container">
        <div className="contactmode-inner-container">
            <text className="h1-heading">TALK TO US</text>
            <div className="contactmode-img-container">
              <img className="contactmode-img" src={contactphone}/>
            </div> 
            <text className="h2-heading">Call</text>
            <text className="contactmode-subheading-value">+91-9805312345<br/>+91-9413491942</text>
        </div>
        <div className="contactmode-inner-container">
            <text className="h1-heading">WRITE TO US</text>
            <div className="contactmode-img-container">
              <img className="contactmode-img" src={contactmail}/>
            </div> 
            <text className="h2-heading">Email</text>
            <text className="contactmode-subheading-value">ramkishorsmt@gmail.com<br/>ramkishor@gmail.com</text>
        </div>
        <div className="contactmode-inner-container">
            <text className="h1-heading">VISIT US</text>
            <div className="contactmode-img-container">
              <img className="contactmode-img" src={contactlocation}/>
            </div> 
            <div className="contactmode-text-container">
                <text className="h2-heading">Location</text>
                <text className="contactmode-subheading-value">DIC Industrial Area<br/>Baddi, Solan, HP, 173205</text>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMode;