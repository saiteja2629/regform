import React from "react";
import { Navbar } from "./Navbar";
import './Contactus.css'

const Contactus = () => {
  return (
    <div className="home-bg-container">
      <h1 className="welcome">WELCOME TO CHERRY FARM HOUSE</h1>
      <div className="nav-bg-container">
        <Navbar />
      </div>

      <div className="contactus-content-container">
        <h3>
          
          Address: House No: 26/29 , Vijayawada , Singh Nagar, Vijayawada ,
                       Andhra Pradesh , Pincode:- 520015
                           Phone No: +91789456123
         
          
        </h3>
      </div>
    </div>
  );
};

export default Contactus;
