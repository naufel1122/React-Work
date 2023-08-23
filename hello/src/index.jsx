import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MyImage from "./MyImage.png";
import Github from "./github.svg";
import Linkedin from "./linkedin.svg";
import instagram from "./instagram.svg";


function Hi() {
  return (
    <div className="main">
      <div className="Curriculum">
        <img className="img" src={MyImage} alt="images" />
        <div className="Info">Muhammad Naufel </div>
        <div className="Data">
          {" "}
          <p>
            "Dedicated software developer with a passion for crafting efficient
            and innovative solutions, [programming languages, technologies, or
            domains]. Committed to continuous learning and collaborating within
            cross-functional teams to deliver high-quality software that meets
            both user needs and business goals."
          </p>{" "}
        </div>
        <div className="Contact"> Nofil.khan037@gmail.com</div>
        <div className="Contacts"><p>03240539139</p></div>
        <div className="images">
              <a href="#"><img height="30px" width="30px" src={Github} alt="" /></a>
              <a href="#"><img height="30px" width="30px" src={Linkedin} alt="" /></a>
              <a href="#"><img height="30px" width="30px" src={instagram} alt="" /></a>
        </div>
      </div>
      <div className="second">


      </div>
    </div>
  );
}
ReactDOM.render(<Hi />, document.querySelector("#root"));
