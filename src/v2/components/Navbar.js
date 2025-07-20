import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo" id="navbar-logo">
        O
      </div>
      <div className="wrapper">
        <div className="hamburger"></div>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
      </div>
      <ul className="navbar-links">
        <li>
          <div class="fas fa-user">
            <span>About</span>
          </div>
        </li>
        <li>
          <div class="fas fa-tools">
            <span>Skills</span>
          </div>
        </li>
        <li>
          <div class="fas fa-folder-open">
            <span>Projects</span>
          </div>
        </li>
        <li>
          <div class="fas fa-envelope">
            <span>Contact</span>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
