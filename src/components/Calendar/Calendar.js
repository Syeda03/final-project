import React, {Component} from 'react';
import DateTime from "react-datetime";
import "./react-dataTime.css";
require('react-datetime');

class Calendar extends Component{
    state = {
        date: new Date(),
    };
    onChange = date => this.setState({ date });
    render(){
        return <DateTime  onChange={this.onChange}
                          value={this.state.date}    />;
    };

};

export default Calendar;