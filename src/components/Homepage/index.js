import React from "react";
import "./index.css";
import { Navbar } from "./Navbar";
import './Homepage.css'


const Homepage = () => {
  return (
    <div className="home-bg-container">
      <h1 className="welcome">WELCOME TO CHERRY FARM HOUSE</h1>
      <div className="nav-bg-container">
      <Navbar/>
      </div>

      <div className="home-content-container">
        <h1>Cherry Farm house to the Heaven </h1>
        <p>Farmhouses were influenced by European settlers. In Quebec, the style varied from Gothic to Swiss, with th
          e kitchen being the most important room in the house.In Ontario, the farmhouses of the late 19th century were of Victorian influence. Earlier ones used clapboard and later variations had brick. Many had front porches. In the west, dwellings varied from single-story wooden homesteads to straw huts. Wooden houses were built later as railroads brought wood from the Rockies (Alberta, British Columbia).
           By the early 1900s houses could be purchased as kits from several Canadian and American companies.</p>
      </div>
    </div>
  );
};

export default Homepage;
