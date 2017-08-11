import React, { Component } from 'react';

export default class Feature extends Component {
constructor(props) {
    super(props);
    this.props = props;
}

    render() {
        return (
            <div>
                <h1>  {this.props.match.params.name}</h1>            
            <hr/>
            
        <form className="text-center">
          <input type="number" placeholder="Amount Spend" />
          <br />
          <input type="number" placeholder="ROI" />
          <br />

          <button className="btn large">Save</button>
        </form>
            
            </div>


        );
    }
}