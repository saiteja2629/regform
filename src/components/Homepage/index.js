import React from "react";
import "./index.css";
import { Navbar } from "./Navbar";


const Homepage = () => {
  return (
    <div className="home-bg-container">
      <h1 className="welcome">WELCOME TO CHERRY FARM HOUSE</h1>
      <div className="nav-bg-container">
      <Navbar/>
      </div>

      <div className="content-container">
        Welcome 
      </div>
    </div>
  );
};

export default Homepage;
