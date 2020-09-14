import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import EffectsDemoNoDependency from "./EffectsDemoNoDependency";
import EffectsDemoUnmount from "./EffectsDemoUnmount";

export default function App() {
  const demoNoDependency = "No dependency array";
  const demoUmount = "Unmount child component";
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/demoNoDependency">{demoNoDependency}</Link>
            </li>
            <li>
              <Link to="/demoUnmount">{demoUmount}</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/demoNoDependency">
            <h2>{demoNoDependency}</h2>
            <EffectsDemoNoDependency />
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
