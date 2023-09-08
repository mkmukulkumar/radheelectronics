import "./ImageAnimation.css"
import hd from "../../assets/circuit.jpg"
const ImageAnimation = () => {

  return (

    <div className="img-container">
        <img className="img-animation-img"src={hd}/>
        <div className="img-animation-tagline-container">
          <text className="img-animation-tagline">YOUR TRUSTED PARTNER IN<br/>ELECTRONICS MANUFACTURING</text>
        </div>
    </div>
    
  );
};

export default ImageAnimation;