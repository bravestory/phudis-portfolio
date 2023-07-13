import './App.css';
import React, { useState } from "react";
import Home from "./Home";
import Education from "./Education";
import Project from "./Project";
import Resume from "./Resume";
import Skill from "./Skill";

function App() {
  const [activeTab, setActiveTab] = useState("home"); //usestate for setting the page as the first time you open the page
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <div className="nav-home">
        <ul className="tab-bar">
          <li
            onClick={() => handleTabClick("home")}
            className={activeTab === "home" ? "active home" : "home"}
          >
            Home
          </li>
          <li
            onClick={() => handleTabClick("project")}
            className={activeTab === "project" ? "active project" : "project"}
          >
            Project
          </li>
          <li
            onClick={() => handleTabClick("education")}
            className={activeTab === "education" ? "active education" : "education"}
          >
            Education
          </li>
          <li
            onClick={() => handleTabClick("resume")}
            className={activeTab === "resume" ? "active resume" : "resume"}
          >
            Resume
          </li>
          <li
            onClick={() => handleTabClick("skill")}
            className={activeTab === "skill" ? "active skill" : "skill"}
          >
            Skill
          </li>
        </ul>
        <div className="tab-content">
          {activeTab === "home" && <Home />}
          {activeTab === "project" && <Project />}
          {activeTab === "education" && <Education />}
          {activeTab === "resume" && <Resume />}
          {activeTab === "skill" && <Skill />}
        </div>
      </div>
    </div>
    
  );
}

export default App;

