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
        <div className="Contacts">
          <p>03240539139</p>
        </div>
        <div className="images">
          <a href="https://github.com/naufel1122">
            <img height="30px" width="30px" src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-nofil-629766261/">
            <img height="30px" width="30px" src={Linkedin} alt="" />
          </a>
          <a href="https://www.instagram.com/muhammad_naufel/">
            <img height="30px" width="30px" src={instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="second">
        <div className="second-main" >
        <div className="experience">
          <h1>Experience</h1>
          <hr />
              <h3>Web Developer</h3>
          <ul>
            <li>
              Corporate with designer to create clean interfaces and simple,
              inuitive interactions and experiences.
            </li>
            <li>Develop Project Concepts and maintain optimal workflow.</li>
            <li>
              Work with senior deveeloper to manage large, Complex Design
              projects for corporate clients
            </li>
            <li>
              Complete detailed programming and development tasks for front end
              public and internal website as well as challenging back-end server
              code.
            </li>
            <li>
              Carry out quality assurance test to discover errors and optimize
              usability.{" "}
            </li>
          </ul>
          {/* <p>As a passionate and driven individual entering the software development field, I am eager to contribute my technical skills and dedication to innovative projects. My academic foundation in [relevant coursework or technologies] has equipped me with a solid understanding of programming principles. I am excited to learn and grow within a collaborative team, translating my enthusiasm into impactful software solutions.</p> */}
        </div>
        <div className="Skills">
          <h1>Skills Highlight</h1>
          <hr />
            <ul>
              <li>Project Management</li>
              <li>Strong Decision Maker</li>
              <li>Complex Problem Slover</li>
              <li>Creative Design</li>
              <li>Innovative</li>
              <li>Service-Focused</li>
            </ul>
          
        </div>
        <div className="Education" >
              <h1>Education</h1><hr />
              <p>Bacholar of Science: <span> Information Technology </span> From Sir Syed University Of Engernning and Technology.</p>
              <p>Diploma: <span> Sylani Mass IT Training.</span></p>
        </div>
        <div className="Certificattions" >
              <h1>Certifications</h1><hr />
              <p>Programming Languages: <span>Java Script, ECMA Script, HTML 5, CSS, PHP, MYSQL.  </span></p>
        </div>
        <div className="Hobbies" >  
              <h1>Hobbies</h1><hr />
              <ul>
                <li>Tech</li>
                <li>Moto Sport</li>
              <li>Photography</li>
              <li>Designing</li>
              </ul>
        </div>
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(<Hi />, document.querySelector("#root"));
