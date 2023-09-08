import "./VisionMission.css"
import vision from "../../assets/vision.svg"
import mission from "../../assets/mission.svg"
const VisionMission = () => {
  return (
    <div className="visionmission-container">
      <div className="visionmission-inner-container">  
          <div className="visionmission-visionmission-container">
              <div className="visionmission-img-container">
                <img className="visionmission-vision-img" src={vision}/>
              </div> 
              <text className="visionmission-heading h1-heading">OUR VISION</text>
              <text className="visionmission-text">Our vision at Radhe Electronics is to lead the electronics 
              manufacturing industry with innovation, precision, and sustainability. We aspire to be a driving 
              force behind transformative advancements in technology, setting new standards for quality, 
              reliability, and customer satisfaction. By harnessing the power of cutting-edge technology 
              and nurturing a culture of creativity, we aim to shape the future of electronics manufacturing 
              and contribute positively to society.</text>
          </div>
          <div className="visionmission-visionmission-container topmrgn">
              <div className="visionmission-img-container">
                <img className="visionmission-vision-img" src={mission}/>
              </div> 
              <text className="visionmission-heading h1-heading">OUR MISSION</text>
              <text className="visionmission-text">Our mission is to provide comprehensive electronics manufacturing 
              solutions that empower our clients to thrive in a rapidly evolving market. Through relentless innovation, 
              dedication, and a customer-centric approach, we continually strive to deliver high-quality services that 
              consistently exceed expectations. Our unwavering commitment to environmental responsibility 
              guides us to operate sustainably and contribute meaningfully to the diverse 
              communities we serve.</text>
          </div>
      </div>    
    </div>
  );
};

export default VisionMission;