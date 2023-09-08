import "./HomeExpertise.css"
import HomeExpBullets from "./HomeExpBullets";
const HomeExpertise = () => {
  return (
    <div className="home-expertise-container">
      <div className="home-expertise-inner-container">
        <text className="home-expertise-heading h1-heading">OUR SERVICES</text>
        <text className="home-expertise-para">
        With over 2 years of industry experience, Radhe Electronics has established itself as a leader in 
        electronics manufacturing. From concept to completion, we are your one-stop destination for a wide 
        array of electronic products and services, including:
        </text> 
        <HomeExpBullets/>         
      </div>  
    </div>
  );
};

export default HomeExpertise;