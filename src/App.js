import "./App.css";
import Homepage from "./components/Homepage";
import { useEffect, useState } from "react";

import Loginform from "./components/loginform";
import Registration from "./components/Registration";

import { Routes, Route } from "react-router-dom";
import About from "./components/Homepage/About";
import Contactus from "./components/Homepage/Contactus";
import Roomsview from './components/Homepage/Roomsview'
import { Bookvenue } from "./components/Homepage/Bookvenue";

function App() {
  const [token, setToken] = useState(false);
  const logIn=JSON.parse(window.localStorage.getItem("isLogIn"))
  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }
  useEffect(()=>{
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/regform"
          element={<Loginform setToken={setToken} />}
        />
        <Route exact path="/register" element={<Registration />} />
        <Route exact path="/home" element={ logIn && <Homepage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact-us" element={<Contactus />} />
        <Route exact path="/rooms-view" element={<Roomsview />} />
        <Route exact path="/bookvenue" element={<Bookvenue />} />

      </Routes>
    </div>
  );
}

export default App;
