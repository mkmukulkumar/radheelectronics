import hd from "../../assets/company.jpg"
const ImageAnimation = () => {

  return (

    <div className="img-container">
        <img className="img-animation-img"src={hd}/>
        <div className="img-animation-tagline-container">
          <text className="img-animation-tagline">CONNECTING FOR EXCELLENCE IN ELECTRONICS MANUFACTURING</text>
        </div>
    </div>
    
  );
};

export default ImageAnimation;