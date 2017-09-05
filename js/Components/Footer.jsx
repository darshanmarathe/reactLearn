import React, { Component } from 'react';

class Footer extends Component {

    constructor() {
        super();
        this.state = { "company": "Infoxtech", year: 2017 }

        setTimeout(() => {
            this.setState({ company: "foxteam" })
        }, 2000)

    }



    render() {
        return (

            <footer class="footer">
                <div class="container">
                    <span class="text-muted">
                        This webapp is copyrighted to {this.state.company} with {this.state.year}
                    </span>
                </div>
            </footer>

        );
    }
}

export default Footer;