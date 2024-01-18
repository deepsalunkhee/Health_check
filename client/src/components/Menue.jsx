import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Menue.css";
import { Profile } from "./Profile";
import { HealthData } from "./HealthData";
import Graphs from "./Graphs";




const Menue = () => {
  const [authUser, setAuthUser] = useState(100);

  const [selectedSection, setSelectedSection] = useState("Profile");
  const navigate = useNavigate();





  
  const handleSectionClick = (section) => {
    setSelectedSection(section);
    console.log("Selected Section:", section);
  };

  const renderSectionContent = () => {
    switch (selectedSection) {
      case "Profile":
        return (
          <div>
        
            <Profile/>
          </div>
        );
      case "Health Stats":
        return (
          <div>
           
            <HealthData/>
          </div>
        );
      case "Graphs":
        return (
          <div>
            
           <Graphs/>
          </div>
        );
      case "Some":
        return (
          <div>
            <h2 className="setHead">Realtive Menue</h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi laboriosam ab qui, vero consequuntur et accusantium saepe error expedita illum ex veniam facere asperiores reiciendis eaque vitae rerum aliquam voluptatibus?
          </div>
        );
      default:
        return null;
    }
  };

  const getButtonClass = (section) => {
    return selectedSection === section ? "active" : "";
  };

  return (
    <div className="Menu-container">
      <nav className="snavbar" style={{ color: "white" }}>
        <ul>
          <li style={{ display: "flex", alignItems: "center" ,marginLeft:"3px"}}>
           
            <h2 style={{marginLeft:"70px" ,color:"white"}}>Menu</h2>
          </li>
         
          <li>
            <button 
            className={getButtonClass("Profile")}
            onClick={() => handleSectionClick("Profile")}>
              
              Profile
            </button>
          </li>

          <li>
            <button className={getButtonClass("Health Stats")} onClick={() => handleSectionClick("Health Stats")}>
              {" "}
              Health Data
            </button>
          </li>

          <li>
            <button className={getButtonClass("Graphs")} onClick={() => handleSectionClick("Graphs")}> Graphs</button>
          </li>

          <li>
            <button className={getButtonClass("Some")} onClick={() => handleSectionClick("Some")}>
             In Progress....
            </button>
          </li>
          
        </ul>
      </nav>

      <div className="Setting_content">{renderSectionContent()}</div>
    </div>
  );
};

export default Menue;
