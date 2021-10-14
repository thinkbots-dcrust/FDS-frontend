import React from 'react';
import {Route,Switch} from "react-router-dom"

//components
import Home from "../pages/home"

function Routes(props) {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes;