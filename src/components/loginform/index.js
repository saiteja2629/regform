import React from "react";
import { useState } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../Client";

const Loginform = (props) => {
  const { setToken } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) throw error;
      window.localStorage.setItem('isLogIn', true)
      setToken(data);
      navigate("/home");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="login-bg-container">
      <div className="login-card-container">
        <div className="login-here">
          <h1> Login Here</h1>
          <form onSubmit={loginHandler}>
            <div className="login-container">
              <label for="emails">Email</label>
              <input
                className="details"
                type="email"
                placeholder="Enter Email"
                id="emails"
                value={email}
                onChange={emailHandler}
              />
            </div>

            <div className="login-container">
              <label for="pass-word">Password</label>
              <input
                className="details"
                type="password"
                placeholder="Enter password"
                id="pass-word"
                value={password}
                onChange={passwordHandler}
              />
            </div>

            <div>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>

        <div className="signup">
          <h3>New User? Signup Here</h3>
          <Link className="sign-up" to="/register">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Loginform;
