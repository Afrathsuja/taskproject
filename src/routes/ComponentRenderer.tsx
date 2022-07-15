import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "../screens/LandingPage/LandingPage";
import SingleProduct from "../screens/SingleProduct/SingleProduct";
 

const ComponentRenderer: React.FC<ComponentRendererProps> = (props) => {

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <LandingPage posts={undefined} />
                </Route>
                <Route path="/singleProduct/:id">
                    <SingleProduct posts={undefined} />
                </Route>
            </Switch>
        </Router>
    );
    
};

interface ComponentRendererProps {
    [key: string]: any;
}

export default ComponentRenderer;
