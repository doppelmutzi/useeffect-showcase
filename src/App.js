import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import EffectsDemoNoDependency from "./EffectsDemoNoDependency";
import EffectsDemoTwoStates from "./EffectsDemoTwoStates";
import EffectsDemoUnmount from "./EffectsDemoUnmount";

export default function App() {
  const demoNoDependency = "No dependency array";
  const demoTwoStates = "Two states causes unnecessary effects";
  const demoUmount = "Unmount child component causes error";
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/demoNoDependency">{demoNoDependency}</Link>
            </li>
            <li>
              <Link to="/demoTwoStates">{demoTwoStates}</Link>
            </li>
            <li>
              <Link to="/demoUnmount">{demoUmount}</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/demoNoDependency">
            <h2>{demoNoDependency}</h2>
            <EffectsDemoNoDependency />
          </Route>
          <Route path="/demoTwoStates">
            <h2>{demoTwoStates}</h2>
            <EffectsDemoTwoStates />
          </Route>
          <Route path="/demoUnmount">
            <h2>{demoUmount}</h2>
            <EffectsDemoUnmount />
          </Route>
          <Route path="/">
            <h2>{demoNoDependency}</h2>
            <EffectsDemoNoDependency />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
