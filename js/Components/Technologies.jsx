import React, { Component } from 'react';

import {
    Route,
    Link
} from 'react-router-dom'



import LanguageStore from '../Stores/LanguageStore';

class Technologies extends Component {

    constructor() {
        super()
        this.state = {
            technos: LanguageStore.GetAll()
        }
    }

    GetLi() {
        var lis = this.state.technos.map(function (item) {
            return <li key={item.id} className="list-group-item">
                <Link to={`/Technologies/techno/${item.id}`}>
                    {item.name}
                </Link>
            </li>
        })
        return lis;
    }
    componentWillMount = () => {
        LanguageStore.on("change", () => {
            this.setState({ technos: LanguageStore.GetAll() })
        })
    }


   
    render() {
        
        return (
            <ul class="list-group">
                {this.GetLi()}
            </ul>
        );
    }
}





export default Technologies;

