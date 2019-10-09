import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
// import Countdown from "../components/Countdown";
import {Link} from "react-router-dom";
import Countdown from "../components/Countdown"



const About = () => (
  <div>
     
    <Hero backgroundImage="http://longwallpapers.com/Desktop-Wallpaper/holiday-wallpaper-hd-resolution-For-Desktop-Wallpaper.jpg">
      <center><iframe width="351" height="468" src="https://w2.countingdownto.com/2675957" frameborder="0"></iframe>
</center>
      
     
        {/* <Countdown  date={`${(new Date().getMonth() === 11 && new Date().getDate() > 23) ? new Date().getFullYear() + 1 : new Date().getFullYear()}-12-24T00:00:00`} />
         <h3 className="title">until Christmas eve</h3>  */}

    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Believe In The Magic of Wrapping</h1>
        </Col>
      </Row>
      <br />
      <Row>
        <Col size="md-12">
             

          <p>With the holiday seasons right around the corner let us help you, and put your mind at easy.  Bring your gifts to us 
            and we will wrap it up for you. We have been doing this for over 25 years. We are the best in the business.</p>

          <p>Our biggest goal is to help you take the stress and worry out of gift presentation so you can focus on the things in 
            your life that really matter.  We are here to bring your ideas to life.</p>

          <p>That’s a wrap!</p> 
          
              <Link to="/services" 
                className="btn btn-outline-success">
                Check our Services
              </Link>
          
        </Col>
      </Row>
      
    </Container>
  </div>
)

export default About;
