import "./HomeExpBullets.css"
const HomeExpBullets = () => {
  return (
    <div className="home-expbullets-container">
        <div className="home-expbullets-inner-container">
          <div className="home-expbullets-list rightmrgn"><text className="home-expbullets-text">Electronic Manufacturing Services (EMS)</text></div>
          <div className="home-expbullets-list leftmrgn"><text className="home-expbullets-text">PCB Assembly (SMT and PTH)</text></div>
        </div>
        <div className="home-expbullets-inner-container">
          <div className="home-expbullets-list rightmrgn"><text className="home-expbullets-text">New Product Development and R&D</text></div>
          <div className="home-expbullets-list leftmrgn"><text className="home-expbullets-text">Plastic Moulding Articles and PET Bottles</text></div>
        </div>
    </div>
  );
};

export default HomeExpBullets;