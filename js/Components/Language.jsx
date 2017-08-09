import React, { Component } from 'react';

class Lang extends Component {

    constructor({ match }) {
        super();
        console.log("language loaded")
        console.log(this.match)
    }

    render() {
        return (
            <div>
                <br />
                <br />
                <br />
                <br />
                <h2>{this.match.params.itemId}</h2>
            </div>
        );
    }
}

export default Lang;