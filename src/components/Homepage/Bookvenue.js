import React, { useState } from "react";
import { Navbar } from "./Navbar";
import "./Bookvenuse.css";

export const Bookvenue = () => {
  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");
  const [message, setMessage] = useState(false);

  const startHandler = (e) => {
    setStartdate(e.target.value);
    setMessage(false);
  };
  const endHandler = (e) => {
    setEnddate(e.target.value);
    setMessage(false);
  };

  const confirmHandler = (e) => {
    e.preventDefault();
    if (startdate === "" || enddate === "") {
      alert("please fill the dates");
    } else {
      
      setStartdate("");
      setEnddate("");
      setMessage(true);
    }
  };
  return (
    <div className="home-bg-container">
      <h1 className="welcome">WELCOME TO CHERRY FARM HOUSE</h1>
      <div className="nav-bg-container">
        <Navbar />
      </div>
      <div className="book-event-container">
        <form  className="form-container"onSubmit={confirmHandler}>
          <div className="book-event-input-container">
            <label>Select Start Date</label>
            <input
              type="date"
              value={startdate}
              onChange={startHandler}
            ></input>
          </div>

          <div className="book-event-input-container">
            <label>Select End Date</label>
            <input type="date" value={enddate} onChange={endHandler}></input>
          </div>
          <div  className="book-event-input-container">
            <label> Enter Purpose for Venue Booking</label>
            <input type="text"></input>
          </div>
          <button  className="submit-btn"type="submit"> Book Venue</button>
          {message && <p>Your Venue Booking was successfully booked</p>}
        </form>
      </div>
    </div>
  );
};
