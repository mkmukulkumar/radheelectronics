import "./AboutContent.css"
import company from "../../assets/company.jpg"
const AboutContent = () => {
  return (
    <div className="about-content-container">
      <div className="about-content-inner-container">
          <div className="about-content-img-container">
            <img className="about-content-img" src={company}/>
          </div>
          <div className="about-content-text-container">
            <text className="h2-heading">OUR STORY</text>
            <text className="about-content-para">
            Our journey began with a vision to redefine industry standards and advance technological frontiers. Today, 
            we take pride in our state-of-the-art facilities and a dedicated team of engineers, skilled operators, and 
            professionals who bring ideas to life.
            </text>
            <text className="about-content-para">
            At the heart of our operations lies a commitment to quality and precision. Our facilities are equipped 
            with cutting-edge technology, enabling us to deliver exceptional results, whether it's intricate PCB assembly, 
            novel product development, or precision plastic molding.
            </text>
            <text className="about-content-para">
            As pioneers in the field, we envision a future where electronics manufacturing is synonymous with innovation. 
            Our relentless pursuit of excellence is reflected in every product that bears our name. Join us on this journey 
            of transformation, where ideas become reality, and partnerships yield progress.
            </text>
          </div>
      </div>          
    </div>
  );
};

export default AboutContent;