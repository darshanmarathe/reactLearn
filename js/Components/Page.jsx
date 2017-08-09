import React, { Component } from 'react';

class Page extends Component {

    title_onchange(e) {
        this.props.changeTitle(e.target.value);
    }


    render() {
        console.log("Page")
        return (
            <div class="container">
                <br />
                <br />
                <br />
                <div class="starter-template">
                    <h1>{this.props.title}</h1>
                    <input onChange={this.title_onchange.bind(this)} value={this.props.title} type="text" placeholder="enter title" />
                </div>
            </div>
        );
    }
}

export default Page;