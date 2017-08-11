import React from 'React'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Page from './Page.jsx';
import Technologies from './Technologies.jsx';
import About from './About.jsx';
import Language from './Language.jsx';
import Feature from "./Feature.jsx";


export default class Layout extends React.Component {


    changeTitle(title) {
        this.setState({ title });
    }

    constructor() {
        super();
        this.state = {
            title: "boot"
        }
    }


    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <div id="container">
                        <layout>
                            <Switch>
                                <Route exact path="/" component={Page} />
                                <Route path="/about" component={About} />
                                <Route exact path="/Technologies" component={Technologies} />
                                <Route path='/Technologies/techno/:itemid' component={Language} />
                                <Route path='/Technologies/feature/:name' component={Feature} />
       
                            </Switch>
                        </layout>
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>

        );
    }
}

