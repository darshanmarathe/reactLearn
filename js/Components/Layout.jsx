import React from 'React'


import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Link
} from 'react-router-dom'



import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Page from './Page.jsx';
import Technologies from './Technologies.jsx';
import About from './About.jsx';


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
            <Router>
                <div>
                    <Header />
                    <br />
                    <br />
                    <br />
                    <Route exact path="/" component={Page} />
                    <Route path="/about" component={About} />
                    <Route path="/Technologies" component={Technologies} />
                </div>

            </Router>

        );
    }
}

