import React from 'react'
import {useNavigate} from 'react-router-dom'
import './index.css'


export const Logout = () => {
    const navigate = useNavigate();
    const logoutHandler = () => {
      sessionStorage.removeItem("token");
      window.localStorage.clear();
      navigate("/regform");
    };
  return (
    <div>
         <button className="logout-btn" onClick={logoutHandler}>
            LOGOUT
          </button>
    </div>
  )
}
