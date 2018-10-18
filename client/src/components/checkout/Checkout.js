import React , {Component} from "react"
import {Elements, StripeProvider} from "react-stripe-elements";
import StripeCheckout from 'react-stripe-checkout';
import Cart from "../../features/cart"
import {Link} from "react-router-dom";

import CheckoutForm from "./CheckoutForm";



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
            }).catch(err => {
                console.log("Error " + err);

        }).catch(err => {
            console.log("Error " + err);
        })

        ;
    });
    }


    render() {
        return (
        <div className="tableStyle">

                <br />
                <h1>Check Out</h1>
                <br />
                <br />
                <Cart />
                <br />
                <br />
                <br />
            <StripeCheckout
                token={this.onToken}
               amount={"2000"} stripeKey="pk_test_YYmTL5Vf3nhVg9Xp5jc6GU3M" billingAddress={true} shippingAddress={true} zipCode={true} name={"The Magic of Wrapping"}
            />
               
                {/*<StripeProvider stripe={this.state.stripe}>*/}
                    {/*<div className="example">*/}
                        {/*<h2>Payment</h2>*/}
                       {/**/}
                        {/*<Elements>*/}
                            {/*<CheckoutForm />*/}
                        {/*</Elements>*/}
                    {/*</div>*/}
                {/*</StripeProvider>*/}

            {/* <div className="buton1">
                <Link to="/ordercomplete" 
                className="btn btn-lg btn-success">
                Ready to schedule dropoff? 
                </Link>
            </div> */}
            

        </div>
        );
    }
}

export default Checkout;
