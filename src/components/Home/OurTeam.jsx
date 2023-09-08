import "./OurTeam.css"
import team from "../../assets/team.jpg"
const OurTeam = () => {
  return (
    <div className="ourteam-container">
        <div className="ourteam-inner-container">
        <text className="ourteam-heading h1-heading">OUR TEAM</text>
        <div className="ourteam-img-container">
            <img className="ourteam-img" src={team}/>
        </div>
        <text className="ourteam-para">
        Our dedicated team is the backbone of our success. With a blend of engineers, skilled operators, and 
        administrative professionals, we bring diverse expertise to the table. Whether it's designing innovative 
        solutions or ensuring flawless assembly, our team is driven by a passion for excellence and a commitment 
        to delivering on time, every time.
        </text>        
    </div>
    </div>
  );
};

export default OurTeam;