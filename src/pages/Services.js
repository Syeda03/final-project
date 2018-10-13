import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";
import ProductListing from "../features/product-listing"
import data from "../data/products.json"

class Services extends Component {
  render() {
    return (
      <div>
        <ProductListing products={data} />
      </div>
    );
  }
}

export default Services;
