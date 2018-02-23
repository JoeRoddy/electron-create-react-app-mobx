import React from "react";
import { render } from "react-dom";
import { HashRouter as Router, Route, hashHistory } from "react-router-dom";
import * as mobx from "mobx";

import Routes from "./Routes";
import "./App.scss";

const rootElement = document.getElementById("root");
mobx.useStrict(true);

const StartPoint = (
  <Router history={hashHistory}>
    <div>
      <Route path="/" component={Routes} />
    </div>
  </Router>
);

render(StartPoint, rootElement);
