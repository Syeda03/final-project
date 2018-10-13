import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Calendar from "../components/Calendar";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () => (
  <div>
    <Hero backgroundImage="http://longwallpapers.com/Desktop-Wallpaper/holiday-wallpaper-hd-resolution-For-Desktop-Wallpaper.jpg">
      <center><iframe width="360" height="480" src="https://w2.countingdownto.com/2280547" frameborder="0"></iframe></center>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Believe In The Magic of Wrapping</h1>
        </Col>
      </Row>
        <Row>   <Col size="md-4"><br/><br/><Calendar/> <br/><br/></Col></Row>
      <Row>
        <Col size="md-12">
          <p>PREMIER GIFT WRAPPING</p>    

          <p>With the holiday seasons right around the corner let us help you, and put your mind at easy.  Bring your gifts to us 
            and we will wrap it up for you. We have been doing this for over 25 years. We are the best in the business.</p>

          <p>Our biggest goal is to help you take the stress and worry out of gift presentation so you can focus on the things in 
            your life that really matter.  We are here to bring your ideas to life.</p>

          <p>That’s a wrap!</p>
          
        </Col>
      </Row>
    </Container>
  </div>
)

export default About;
