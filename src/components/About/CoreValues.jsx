import "./CoreValues.css"
const CoreValues = () => {
  return (
    <div className="corevalues-outer-container">
      <div className="corevalues-container">
          <text className="corevalues--heading h1-heading">OUR CORE VALUES</text>
          <div className="corevalues-inner-container">
              <div className="corevalues-list">
              <text className="h2-heading">INTEGRITY</text>
              <text className="corevalues-para">
              We uphold the highest standards of ethics, transparency, and honesty in all our endeavors. 
              Our commitment to integrity is unwavering, fostering trust among our clients, partners, 
              and team members.
              </text>
              </div>
              <div className="corevalues-list">
              <text className="h2-heading topmrgn">INNOVATION</text>
              <text className="corevalues-para">
              We thrive on innovation as a driving force for progress. We continually seek novel solutions,
              embrace emerging technologies, and encourage creative thinking to deliver products and services
                that exceed expectations.
              </text>
              </div>
          </div>
          <div className="corevalues-inner-container">
              <div className="corevalues-list">
              <text className="h2-heading">EXCELLENCE</text>
              <text className="corevalues-para">
              Excellence is not just a goal; it's our standard. We are dedicated to achieving exceptional 
              results in everything we do. From the smallest detail to the grandest project, we strive for 
              excellence that speaks for itself.
              </text> 
              </div>
              <div className="corevalues-list">
              <text className="h2-heading topmrgn">COLLABORATION</text>
              <text className="corevalues-para">
              We believe in the power of collaboration. By working together, we amplify our strengths and 
              leverage diverse perspectives to achieve shared goals. We value open communication and mutual 
              respect in every partnership.
              </text>
              </div>
          </div>    
          <div className="corevalues-inner-container">
              <div className="corevalues-list">
              <text className="h2-heading">CUSTOMER-CENTRIC</text>
              <text className="corevalues-para">
              Our clients are at the heart of our operations. We are committed to understanding their needs, 
              exceeding their expectations, and delivering solutions that add tangible value to their projects 
              and businesses.
              </text>
              </div>
              <div className="corevalues-list">
              <text className="h2-heading topmrgn">CONTINOUS IMPROVEMENT</text>
              <text className="corevalues-para">
              We believe in evolving and adapting to stay at the forefront of the industry. Through continuous
              learning, refinement, and growth, we ensure that our products and services remain relevant and
              effective.
              </text> 
              </div>
          </div>    
      </div>
    </div>  
  );
};

export default CoreValues;