import React from "react";
import { Switch, Route } from "react-router-dom";
import Dash from "./components/Dashboard";
import Form from "./components/Form";



export default (
  <Switch>
    <Route component={Dash} exact path="/" />
    <Route component={Form} path="/api/products/:id" />
  </Switch>
);