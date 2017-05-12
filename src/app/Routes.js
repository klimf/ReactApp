import React from "react";
import {Route, Switch} from "react-router";
import HomePage from "../pages/home/app";

const Routes = (props) => (
    <Switch>
        <Route exact path="/" component={HomePage}/>
    </Switch>
);
export default Routes;