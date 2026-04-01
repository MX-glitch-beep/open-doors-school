import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBook, FaUserGraduate, FaAddressBook } from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">OIS</Link>

        {/* Hamburger for mobile */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" className="nav-item">
              <FaHome className="icon"/> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-item">
              <FaAddressBook className="icon"/> About
            </Link>
          </li>
          <li>
            <Link to="/courses" className="nav-item">
              <FaBook className="icon"/> Courses
            </Link>
          </li>
          <li>
            <Link to="/admissions" className="nav-item">
              <FaUserGraduate className="icon"/> Admissions
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-item">
              <FaAddressBook className="icon"/> Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;