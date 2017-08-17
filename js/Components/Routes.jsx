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





//TODO :: Redirects 
//TODO :: NOT FOUND 
//TODO :: Wild card redirects 
//TODO :: Transitions
//TODO :: Location (Hash routes)


class RoutesComponent extends Component {
    render() {
        console.log("rendered Routes compoennt");
        return (

               <Switch>
                    <Route exact path="/" component={Page} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/Client" component={Client} />
                    <Route exact path="/Contact" component={Contact} />

                    <Redirect from="/technos" to="/Technologies"/>
                    <Route exact path="/Technologies" component={Technologies} />
                    <Route path='/Technologies/techno/:itemid' component={Language} />
                    <Route path='/Technologies/feature/:name' component={Feature} />

                    <Route component={PageNotFound} />
                </Switch>
      
        );
    }
}

export default RoutesComponent;


