import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import store from "./config/store";
import { Provider } from "react-redux"

const app = <Provider store={store}>
    <App />
</Provider>

ReactDOM.render(app, document.getElementById("root"));
