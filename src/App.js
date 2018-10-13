import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Services from "./pages/Services";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/checkout" component={Checkout} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
