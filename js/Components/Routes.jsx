import React, { Component } from 'react';
import { RouteTransition } from 'react-router-transition';
import { BrowserRouter, Route, Redirect, Link, Switch } from 'react-router-dom'
import PageNotFound from './PageNotFound.jsx';

import Page from './Page.jsx';
import Technologies from './Technologies.jsx';
import About from './About.jsx';
import Language from './Language.jsx';
import Feature from "./Feature.jsx";
import Client from "./Client.jsx";
import Contact from "./Contact.jsx"
import TodoList from "./TodoList.jsx"




class RoutesComponent extends Component {

    render() {
        console.log(this.props);

        return (
            <Route render={({ location, history, match }) => {
                return (
                    <RouteTransition
                        className="transition-wrapper"
                        pathname={location.pathname}
                        {...this.props.presets}>
                        <Switch>
                            <Route exact path="/" component={Page} />
                            <Route exact path="/about" component={About} />


                            <Route exact path="/Client" component={Client} />
                            <Route path="/Client/*" component={Client} />
                            <Route exact path="/Contact" component={Contact} />
                      
                            <Route exact path="/todos" component={TodoList} />
                      
                            <Redirect from="/technos" to="/Technologies" />
                            <Route exact path="/Technologies" component={Technologies} />
                            <Route path='/Technologies/techno/:itemid' component={Language} />
                            <Route path='/Technologies/feature/:name' component={Feature} />
                            <Route component={PageNotFound} />
                        </Switch>

                    </RouteTransition>
                );
            }} />
        );
    }
}

export default RoutesComponent;


