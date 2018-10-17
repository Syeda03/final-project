import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import {Elements, StripeProvider} from "react-stripe-elements";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import {setCurrentUser} from "./actions/authactions"
import store from "./store";
import Navbar from "./components/Layout/Navbar/Navbar";
import Footer from "./components/Layout/Footer/Footer";
import Login from "././components/auth/Login/Login";
// import Services from "././components/services/Services";
// import Checkout from "././components/checkout/Checkout";
import Register from "././components/auth/Register/Register";
import Services from "./components/services/Services";
import About from "./components/About";
import CheckoutForm from "./components/checkout/CheckoutForm";


import Checkout from "./components/checkout/Checkout";


import './App.css';

//Check for token (to prevent user being logged out on page refresh)
if(localStorage.jwtToken){
  //set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // decode the token and get user info and expiration(1 hr)
  const decoded = jwt_decode(localStorage.jwtToken);
  //set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

}

class App extends Component {
    constructor() {
        super();
        this.state = {stripe: null};
    }
    componentDidMount() {
        if (window.Stripe) {
            this.setState({stripe: window.Stripe('pk_test_YYmTL5Vf3nhVg9Xp5jc6GU3M')});
        } else {
            document.querySelector('#stripe-js').addEventListener('load', () => {
                // Create Stripe instance once Stripe.js loads
                this.setState({stripe: window.Stripe('pk_test_YYmTL5Vf3nhVg9Xp5jc6GU3M')});
            });
        }
    }
  render() {
    return (
      
        <Router>
          <div className="App">
            <Navbar />
             <Route exact path="/" component={About} />
            <Route exact path="/services" component={Services} />
            <div className="Container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
            <Route exact path="/checkout" component={Checkout} />

            <Footer/>
            </div>
        </Router>
     
    );
  }
}

export default App;
