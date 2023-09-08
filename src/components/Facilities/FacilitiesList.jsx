import "./FacilitiesList.css"
import company from "../../assets/company.jpg"
const FacilitiesList = () => {
  return (
    <div className="facilities-list-outer-container">
            <div className="facilities-list-main-heading-container">
            <text className="facilities-list-main-heading h1-heading">OUR INFRASTRUCTURE</text>
            </div>
            <div className="facilities-list-container"> 
                  <div className="facilities-list-img-container">
                    <img className="facilities-list-img" src={company}/>
                  </div> 

                <div className="facilities-list-text-container">
                  <text className="h2-heading">PCB Assembly M.I Lines</text>   
                  <text className="facilities-list-para">
                  Equipped for efficient production and assembly of various electronic products.
                  </text>
                </div>
            </div>
            <div className="facilities-list-container"> 
                  <div className="facilities-list-img-container">
                    <img className="facilities-list-img" src={company}/>
                  </div> 

                <div className="facilities-list-text-container">
                  <text className="h2-heading">PCB Assembly Touch-up Lines</text>   
                  <text className="facilities-list-para">
                  Equipped for efficient production and assembly of various electronic products.
                  </text>
                </div>
            </div>

            <div className="facilities-list-inner-container">
                
                <div className="facilities-list-inner-subcontainer"> 
                      <div className="facilities-list-img-container">
                        <img className="facilities-list-img" src={company}/>
                      </div> 

                      <div className="facilities-list-text-container">
                        <text className="h2-heading">FUJI XP142 SMT Pick and Place</text>   
                        <text className="facilities-list-para">
                        Precision component placement for impeccable PCB assembly.</text>
                      </div>
                </div>
                <div className="facilities-list-inner-subcontainer"> 
                      <div className="facilities-list-img-container">
                        <img className="facilities-list-img" src={company}/>
                      </div> 

                      <div className="facilities-list-text-container">
                        <text className="h2-heading">Yontoro Wave Soldering Machine</text>   
                        <text className="facilities-list-para">
                        Ensures reliable soldering for exceptionally robust connections.
                        </text>
                      </div>
                </div>
              
            </div> 
            
            <div className="facilities-list-inner-container">
                
                <div className="facilities-list-inner-subcontainer"> 
                      <div className="facilities-list-img-container">
                        <img className="facilities-list-img" src={company}/>
                      </div> 

                      <div className="facilities-list-text-container">
                        <text className="h2-heading">Estover Reflow Machine</text>   
                        <text className="facilities-list-para">
                        Achieves precise temperature profiles for optimal soldering.</text>
                      </div>
                </div>
                <div className="facilities-list-inner-subcontainer"> 
                      <div className="facilities-list-img-container">
                        <img className="facilities-list-img" src={company}/>
                      </div> 

                      <div className="facilities-list-text-container">
                        <text className="h2-heading">Plastic Molding Equipment</text>   
                        <text className="facilities-list-para">
                        Expertly molds plastic components with finesse and accuracy.
                        </text>
                      </div>
                </div>
              
            </div>  
    </div>

  );
};

export default FacilitiesList;