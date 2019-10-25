import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import history from "./history";

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={StepOne} />    
            <Route path="/two" component={StepTwo} />
            <Route path="/three" component={StepThree} />
        </Switch>
    </Router>
);

export default Routes;
