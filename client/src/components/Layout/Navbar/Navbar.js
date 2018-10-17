import React, { Component } from 'react'
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import{ connect } from "react-redux";
import {logoutUser } from "../../../actions/authactions"

import './Navbar.css';

class Navbar extends Component {
  onLogoutClick(e){
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user} = this.props.auth;

    const authLinks =(
      <ul className="navbar-nav ml-auto">
      <li className="nav-item">
          <Link className="nav-link" to="/services">
          Services
          </Link>
      </li>
        <li className="nav-item">
        <a 
          href = "#" 
          onClick= { this.onLogoutClick.bind(this)} 
          className= "nav-link"
          >
          Logout
        </a>
        </li>
        <li className="nav-item">
             <Link className="nav-link" to="/checkout">
              <i class="fas fa-shopping-cart">Cart</i>
          </Link>
      </li>
                
      </ul>
    );
    const guestLinks =(
      <ul className="navbar-nav ml-auto">
      <li className="nav-item">
          <Link className="nav-link" to="/services">
          Services
          </Link>
      </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">
          Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
          Login
          </Link>
        </li>
      <li className="nav-item">
             <Link className="nav-link" to="/checkout">
              <i class="fas fa-shopping-cart">Cart</i>
          </Link>
      </li>
      </ul>
    );
    return (
      <div>
          <nav className="navbar navbar-expand-sm navbar bg mb-4">
            <Link className="navbar-brand" to="/">
            The Magic of Wrapping
            </Link>
            <button className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#mobile-nav">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" 
            id="mobile-nav">
            {isAuthenticated ? authLinks : guestLinks}
            </div>
         </nav>
      </div>
      
    );
    
    
    
    
    
    // (
    //   <div>
    //       <nav className="navbar navbar-expand-sm navbar bg-light">
    //         <Link className="navbar-brand" to="/">
    //         Magic of Wrapping
    //         </Link>
    //         <button className="navbar-toggler" 
    //         type="button" 
    //         data-toggle="collapse" 
    //         data-target="#mobile-nav">
    //         <span className="navbar-toggler-icon"></span>
    //         </button>

    //         <div className="collapse navbar-collapse" 
    //         id="mobile-nav">
    //         {isAuthenticated ? authLinks : guestLinks}
    //         </div>
    //       </nav>
    //       </div>
    // )


  }
}
Navbar.PropTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
