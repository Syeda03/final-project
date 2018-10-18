import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
// import {CardNumberElement} from "react-stripe-elements"
// import {CardExpiryElement} from "react-stripe-elements"
// import {PostalCodeElement} from "react-stripe-elements"

import {Link} from "react-router-dom";


class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.state = {complete: false};
    }
    async submit(ev) {
        let {token} = await this.props.stripe.createToken({name: "Name"});
        let response = await fetch("/api/payment/charge", {
            method: "POST",
            headers: {"Content-Type": "text/plain"},
            body: token.id
        });
        if (response.ok) this.setState({complete: true});
        if (response.ok) console.log("Purchase Complete!")
    }

    render() {
        if (this.state.complete) return <h1>Purchase Complete</h1>;
        return (
            <div className="checkout">
                <p>Would you like to complete the purchase?</p>
                <CardElement />
                <Link to="/ordercomplete" 
                 className="btn btn-outline-success" onClick={this.submit}>
                 Send
                </Link>
            </div>
           
        );
    }
}

export default injectStripe(CheckoutForm);