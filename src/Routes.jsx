import React, { Component } from "react";
import { Route } from "react-router-dom";

import { observer } from "mobx-react";
import Header from "./components/reusable/Header";
import WordChanger from "./components/WordChanger";
import Todos from "./components/Todos";

@observer
class Routes extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Route exact path="/" component={WordChanger} />
          <Route path="/todos" component={Todos} />
        </div>
      </div>
    );
  }
}

export default Routes;
