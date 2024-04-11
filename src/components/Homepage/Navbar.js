import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Logout } from "./Logout";

export const Navbar = () => {
 
  return (
    <div className="navbar-bg-container">
      <div className="logo">
        <img
          className="logo-img"
          src="https://logos.textgiraffe.com/logos/logo-name/Cherry-designstyle-boots-m.png"
          alt="Cherry"/>
          <img  className="logo-img"src="https://marketplace.canva.com/EAFaZ0JlqVs/1/0/1600w/canva-green-and-white-farm-agriculture-business-logo-JoMoWDIeGdM.jpg" alt=''></img>
      </div>
      <ul className="nav-items">
        <li className="nav-list-item">
          <Link className="nav-link" to="/about">
            ABOUT
          </Link>
        </li>
        <li className="nav-list-item">
          <Link className="nav-link" to="/contact-us">
            CONTACT US
          </Link>
        </li>
        <li className="nav-list-item">
          <Link className="nav-link" to="/rooms-view">
            ROOMS VIEW
          </Link>
        </li>
        <li className="logout-hover">
         <Logout/>
        </li>
      </ul>
      <div className="book-venue-btn">
      <Link  className="book-venue" to="/bookvenue">
          BOOK VENUE
        </Link>
      </div>
    </div>
  );
};
