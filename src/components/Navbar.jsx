import "./navbar.css";
import React from "react";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import About from "./about";

export default function Header() {
  return (
    <div className="header">
      <h3 className="logoName">Trippy</h3>
      <div className="header2">
        <NavLink to="" className="link">
          Home
        </NavLink>
        <NavLink to="" className="link">
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
        </NavLink>
        <button className="signInBtn">Sign In</button>
      </div>
    </div>
  );
}
