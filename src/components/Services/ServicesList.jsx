import "./ServicesList.css"
import company from "../../assets/company.jpg"
const ServicesList = () => {
  return (
    <div className="services-list-outer-outer-container">
        <div className="services-list-outer-container">
            <div className="services-list-container">   
                <div className="services-list-text-container">
                  <text className="services-list-heading h2-heading">Electronic Manufacturing Services (EMS)</text>
                  <text className="services-list-para">
                  From concept to completion, our Electronic Manufacturing Services (EMS) cover every step of the manufacturing
                  process. With an unwavering focus on quality and efficiency, we transform your ideas into tangible products 
                  that exceed industry standards. Our state-of-the-art facilities, equipped with cutting-edge SMT machines and 
                  advanced testing equipment, ensure the highest precision and reliability in every EMS project.
                  </text>
                </div>
                <div className="services-list-img-container">
                  <img className="services-list-img" src={company}/>
                </div>
            </div>
            <div className="services-list-container">   
                <div className="services-list-text-container">
                  <text className="services-list-heading h2-heading">PCB Assembly (SMT and PTH)</text>
                  <text className="services-list-para">
                  Our advanced Surface Mount Technology (SMT) and Plated Through-Hole (PTH) capabilities ensure seamless and reliable PCB assembly. Backed by top-tier equipment and skilled operators, we deliver results that align with your exact specifications. Our assembly lines are equipped with state-of-the-art SMT pick and place machines for precise component placement and wave soldering machines to guarantee strong connections.
                  </text>
                </div>
                <div className="services-list-img-container">
                  <img className="services-list-img" src={company}/>
                </div>
            </div>
            <div className="services-list-container">   
                <div className="services-list-text-container">
                  <text className="services-list-heading h2-heading">Product Development and R&D</text>
                  <text className="services-list-para">
                  Innovation is at the core of our services. Our experienced engineers and professionals collaborate to develop groundbreaking products that redefine industry norms. Through meticulous research and innovative design, we turn ideas into reality. Our R&D lab is equipped with the latest design software and prototyping tools, enabling us to bring your concepts to life with efficiency and creativity.
                  </text>
                </div>
                <div className="services-list-img-container">
                  <img className="services-list-img" src={company}/>
                </div>
            </div>
            <div className="services-list-container">   
                <div className="services-list-text-container">
                  <text className="services-list-heading h2-heading">Plastic Moulding Articles and PET Bottles</text>
                  <text className="services-list-para">
                  Precision and aesthetics meet in our plastic molding services. We create functional and visually appealing components through expert molding techniques. Our offerings range from intricate articles to PET bottles that meet the highest quality standards. Our dedicated molding facility is equipped with specialized machinery for precise molding and finishing processes.
                  </text>
                </div>
                <div className="services-list-img-container">
                  <img className="services-list-img" src={company}/>
                </div>
            </div>
            <div className="services-list-container">   
                <div className="services-list-text-container">
                  <text className="services-list-heading h2-heading">Home Appliance Products</text>
                  <text className="services-list-para">
                  Experience the perfect blend of modern design and advanced technology in our range of home appliance products. Each product is meticulously crafted to enhance efficiency, convenience, and user experience. Our assembly lines combine skilled operators and automated machinery for streamlined production and consistent quality.
                  </text>
                </div>
                <div className="services-list-img-container">
                  <img className="services-list-img" src={company}/>
                </div>
            </div>
            <div className="services-list-container">   
                <div className="services-list-text-container">
                  <text className="services-list-heading h2-heading">Customized Solutions</text>
                  <text className="services-list-para">
                  We understand that every project is unique. Our team thrives on collaboration, working closely with you to create customized solutions that align perfectly with your specific requirements. Our cross-functional team of engineers and operators collaborate seamlessly to deliver tailored solutions that exceed expectations.
                  </text>
                </div>
                <div className="services-list-img-container">
                  <img className="services-list-img" src={company}/>
                </div>
            </div>
          </div>  
    </div>

  );
};

export default ServicesList;