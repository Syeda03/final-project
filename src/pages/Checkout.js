import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import Calendar from '../components/Calendar';
import Row from "../components/Row";
import Col from "../components/Col";

import Card from "../components/Card";
import Alert from "../components/Alert";

class Discover extends Component {

    render() {
        return (
            <div>
                <Row>
                    <Col size="md-12">
                        <h1 className="text-center">checkout cart goes here</h1><br/><br/>
                    </Col>
                </Row>
                <Row><Col size="md-4"/><Col size="md-4"><Calendar/> </Col><Col size="md-4"/></Row>


            </div>
        );
    }
}

export default Discover;
