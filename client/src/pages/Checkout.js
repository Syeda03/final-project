import React , {Component} from "react"
import {Elements, StripeProvider} from "react-stripe-elements";
import StripeCheckout from 'react-stripe-checkout';
import Cart from "../features/cart"

import CheckoutForm from "../components/checkout/Checkout";


class Checkout extends Component {
    constructor() {
        super();
        this.state = {stripe: null};
    }

    onToken = (token) => {
        fetch('/api/payment/charge', {
            method: 'POST',
            body: JSON.stringify(token),
        }).then(response => {
            response.json().then(data => {
                alert(`We are in business, ${data.email}`);
            });
        }).catch(err => {
            console.log("Error " + err);
        })

        ;
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
        console.log(<Cart/>);
        return (
            <div className="tableStyle">

                <br />
                <h1>Check Out</h1>
                <br />
                <br />
                <Cart />
                <StripeCheckout
                    token={this.onToken}
                    stripeKey="pk_test_YYmTL5Vf3nhVg9Xp5jc6GU3M" billingAddress={true} shippingAddress={true}
                />

            </div>
        );
    }
}

export default Checkout;
