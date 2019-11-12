import React from "react";
import { render } from "react-dom";
// import App from "../shared/App";
import { BrowserRouter } from "react-router-dom"
import Home from "../app/home/home.component"
import App from "../App";

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById("root"));