import "./navbar.css";
import React from "react";
import {Link} from 'react-router-dom'
// import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";


export default function Navbar() {
  return (
    <div className="header">
      <h3 className="logoName">Trippy</h3>
      <div className="header2">
        <Link to={'/'} className="">Home</Link>
        <Link to={'/About'}>About</Link>
        {/* <NavLink to="" className="link">
          Services  
        </NavLink>
        <NavLink
          to="/about"
          className="link"
          style={({ isActive }) => {
            return isActive ? {color: "plum"} : {};
          }}
        >
          About
        </NavLink>
        <NavLink to="" className="link">
          Contact
        </NavLink> */}
        <button className="signInBtn">Sign In</button>
      </div>
    </div>
  );
}
