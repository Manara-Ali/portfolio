// 1. IMPORT REACT
import React from "react";

// 2. IMPORT REACTDOM
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM, { render } from "react-dom";

// 3. ADDITIONAL IMPORTS GO HERE
import App from "./components/App";

// 4. RENDER APPLICATION TO THE SCREEN
ReactDOM.render(<App />, document.querySelector("#root"));
