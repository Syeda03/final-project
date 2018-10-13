import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light ">
    <Link className="navbar-brand" to="/">
      Magic Of Wrapping
    </Link>
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/"
            className={
              window.location.pathname === "/" || window.location.pathname === "/about"
                ? "nav-link active"
                : "nav-link"
            }
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/services"
            className={
              window.location.pathname === "/services"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/sign-in"
            className={
              window.location.pathname === "/sign-in"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Sign-up/Login-in
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/checkout"
            className={
              window.location.pathname === "/checkout"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Checkout
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
