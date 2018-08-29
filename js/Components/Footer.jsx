import React, { Component } from 'react';

class Footer extends Component {

    constructor() {
        super();
        this.state = { "company": "Infoxtech", year: new Date() }

        setTimeout(() => {
            this.setState({ company: "foxteam" })
        }, 2000)

    }



    render() {
        return (
            <div>
                This webapp is copyrighted to {this.state.company} with {this.state.year}
            </div>
        );
    }
}

export default Footer;