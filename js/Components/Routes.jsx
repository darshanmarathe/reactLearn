import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Link, Switch } from 'react-router-dom'

import { spring, AnimatedSwitch } from 'react-router-transition';


import PageNotFound from './PageNotFound.jsx';

import Page from './Page.jsx';
import Technologies from './Technologies.jsx';
import About from './About.jsx';
import Language from './Language.jsx';
import Feature from "./Feature.jsx";
import Client from "./Client.jsx";
import Contact from "./Contact.jsx"
import TodoList from "./TodoList.jsx"


// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};





class RoutesComponent extends Component {

    render() {
        return (
            <AnimatedSwitch
             className="route-wrapper"
                {...this.props.presets}>

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
            </AnimatedSwitch>
        );
    }
}

export default RoutesComponent;


/*

   <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
            className="route-wrapper">
*/