import React from 'React'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Page from './Page.jsx';
import Technologies from './Technologies.jsx';
import About from './About.jsx';
import Language from './Language.jsx';
import Feature from "./Feature.jsx";

import Presets from './presets.jsx'
import RoutesComponent from './Routes.jsx';




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
                        <RoutesComponent presets={Presets.slideRight} />
                        <Footer />
                    </div>
                </div>
            </BrowserRouter>

        );
    }
}

