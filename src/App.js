import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import EffectsDemoNoDependency from "./EffectsDemoNoDependency";
import EffectsDemoTwoStates from "./EffectsDemoTwoStates";
import EffectsDemoTwoStatesWithDependeny from "./EffectsDemoTwoStatesWithDependeny";
import EffectsDemoInfiniteLoop from "./EffectsDemoInfiniteLoop";
import EffectsDemoUnmount from "./EffectsDemoUnmount";
import EffectsDemoUnmountCleanup from "./EffectsDemoUnmountCleanup";
import EffectsDemoEffectOnce from "./EffectsDemoEffectOnce";
import EffectsDemoProps from "./EffectsDemoProps";
import EffectsDemoContext from "./EffectsDemoContext";
import EffectsDemoCustomHook from "./EffectsDemoCustomHook";
import EffectsDemoEffectConditional from "./EffectsDemoEffectConditional";

export default function App() {
  const demoNoDependency = "No dependency array";
  const demoTwoStates = "Two states causes unnecessary effects";
  const demoTwoStatesWithDependency = "Skip unnecessary effects";
  const demoInfiniteLoop = "Infinite loop of effects";
  const demoEffectOnce = "Execute effect only once";
  const demoUmount = "Unmount child component causes error";
  const demoUmountCleanup = "Unmount child component executes cleanup";
  const demoPropsChange = "Implications with props";
  const demoContext = "Implications with context";
  const demoCustomHook = "Custom hook (useFetch)";
  const demoEffectConditional = "Effect only once after condition met";
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
              <Link to="/demoInfiniteLoop">{demoInfiniteLoop}</Link>
            </li>
            <li>
              <Link to="/demoEffectOnce">{demoEffectOnce}</Link>
            </li>
            <li>
              <Link to="/demoTwoStatesWithDependency">
                {demoTwoStatesWithDependency}
              </Link>
            </li>
            <li>
              <Link to="/demoUnmount">{demoUmount}</Link>
            </li>
            <li>
              <Link to="/demoUnmountCleanup">{demoUmountCleanup}</Link>
            </li>
            <li>
              <Link to="/demoPropsChange">{demoPropsChange}</Link>
            </li>
            <li>
              <Link to="/demoContext">{demoContext}</Link>
            </li>
            <li>
              <Link to="/demoCustomHook">{demoCustomHook}</Link>
            </li>
            <li>
              <Link to="/demoEffectConditional">{demoEffectConditional}</Link>
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
          <Route path="/demoTwoStatesWithDependency">
            <h2>{demoTwoStatesWithDependency}</h2>
            <EffectsDemoTwoStatesWithDependeny />
          </Route>
          <Route path="/demoInfiniteLoop">
            <h2>{demoInfiniteLoop}</h2>
            <EffectsDemoInfiniteLoop />
          </Route>
          <Route path="/demoEffectOnce">
            <h2>{demoEffectOnce}</h2>
            <EffectsDemoEffectOnce />
          </Route>
          <Route path="/demoUnmount">
            <h2>{demoUmount}</h2>
            <EffectsDemoUnmount />
          </Route>
          <Route path="/demoUnmountCleanup">
            <h2>{demoUmountCleanup}</h2>
            <EffectsDemoUnmountCleanup />
          </Route>
          <Route path="/demoPropsChange">
            <h2>{demoPropsChange}</h2>
            <EffectsDemoProps />
          </Route>
          <Route path="/demoContext">
            <h2>{demoContext}</h2>
            <EffectsDemoContext />
          </Route>
          <Route path="/demoCustomHook">
            <h2>{demoCustomHook}</h2>
            <EffectsDemoCustomHook />
          </Route>
          <Route path="/demoEffectConditional">
            <h2>{demoEffectConditional}</h2>
            <EffectsDemoEffectConditional />
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
