import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { supabase } from "../Client";

const Registration = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repeatpassword, setRepeatpassword] = useState("");

  const nameHandler = (e) => {
    setFullname(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const repasswordHandler = (e) => {
    setRepeatpassword(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      let { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            full_name: fullname
          }
        }
      });
      console.log(data)
      if(error) throw error
    } catch (error) {
      alert(error);
    }

    if (password === repeatpassword) {
      if (password.length >= 8) {
        setFullname("");
        setEmail("");
        setPhone("");
        setPassword("");
        setRepeatpassword("");
        alert("Details are Recorded");
      } else {
        alert("password length should be atlest 8 charc");
      }
    } else {
      alert("Password should be match");
    }
  };
  return (
    <div className="app-container">
      <h1>Registration</h1>

      <form onSubmit={submitHandler}>
        <div className="details">
          <label className="label-details" htmlFor="FullName">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            id="FullName"
            value={fullname}
            onChange={nameHandler}
            required
          ></input>
        </div>
        <div className="details">
          <label className="label-details" htmlFor="emails">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            id="emails"
            value={email}
            onChange={emailHandler}
            required
          ></input>
        </div>
        <div className="details">
          <label className="label-details" htmlFor="phone">
            Phone number
          </label>
          <input
            type="text"
            placeholder="Enter username"
            id="phone"
            value={phone}
            onChange={phoneHandler}
            required
          ></input>
        </div>
        <div className="details">
          <label className="label-details" htmlFor="pass-word">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            id="pass-word"
            value={password}
            onChange={passwordHandler}
            required
          ></input>
        </div>
        <div className="details">
          <label className="label-details" htmlFor="rep-pass">
            Repeat password
          </label>
          <input
            type="password"
            placeholder="Repeat password"
            id="rep-pass"
            value={repeatpassword}
            onChange={repasswordHandler}
            required
          ></input>
        </div>
        <div className="check-box">
          <input
            className="checkbox-input"
            type="checkbox"
            id="checkBox"
            value=""
            required
          />
          <label className="checkbox-label" htmlFor="checkBox">
            I agreed to the terms
          </label>
        </div>
        <div className="submit">
          <button type="submit">Signup</button>
        </div>
        <p className="already-reg"> Already Registered? </p>

        <p className="login">
          <Link to="/regform">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Registration;
