import ContactUs from "../ContactUs";
import "./HomeContent.css"
import OurTeam from "./OurTeam";
import WhyUsBullets from "./WhyUsBullets";
const HomeContent = () => {
  return (
    <div className="home-content-container">
    <div className="home-content-inner-container">
        <text className="home-content-heading h1-heading">WHY US?</text>
        <WhyUsBullets/>          
    </div>
    </div>
  );
};

export default HomeContent;