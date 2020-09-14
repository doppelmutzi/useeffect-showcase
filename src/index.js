import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// https://github.com/supasate/connected-react-router/issues/193
// strict mode causes double rendering with react router
ReactDOM.render(<App />, document.getElementById("root"));
