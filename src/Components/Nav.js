import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <a href="/" className="navbar-brand">
          Nanban
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarmenu">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/volunteer">Volunteer Enrollment</Link>
            </li>
            <li className="nav-item">
              <Link to="/contributor">Contributors Registration</Link>
            </li>
            <li className="nav-item">
              <Link to="/register">Signup</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
