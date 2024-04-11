import React from "react";
import "./About.css";
import { Navbar } from "./Navbar";

const About = () => {
  return (
    <div className="home-bg-container">
      <h1 className="welcome">WELCOME TO CHERRY FARM HOUSE</h1>
      <div className="nav-bg-container">
        <Navbar />
      </div>

      <div className="about-content-container">
        <p className="about">
          Cherry farmhouse is usually purchased as vacation homes, second homes
          or rental spaces and purposes such as weddings, corporate events,
          parties, etc. Cherry FarmHouse are calling for Environmental and heart
          felting peace.
        <br/>
        <p className="benfits">
        These are the benfits you will get ..TRANSQUILITY AND PEACE FRESH AND CLEAN ENVIRONMENT. SPACE AND
            PRIVACY. CONNECTION WITH NATURE. LOWER COST OF LIVING. SENSE OF
            COMMUNITY.
        </p>
         
           
         
        </p>
      </div>
    </div>
  );
};

export default About;
