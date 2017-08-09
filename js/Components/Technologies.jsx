import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom'


import Lang from './Language.jsx';

class Technologies extends Component {

    technos = [
        {
            id: 1,
            name: "C#"
        },
        {
            id: 2,
            name: "Javascript"
        },
        {
            id: 3,
            name: "Java"
        },
        {
            id: 4,
            name: "Android"
        }

    ]


    GetLi() {
        var lis = this.technos.map(function (item) {
            return <li key={item.id} className="list-group-item">
                <NavLink to={`/techno/${item.id}`}>
                    {item.name}
                </NavLink>
            </li>
        })
        return lis;
    }


    GetRoutes() {
        var routes = this.technos.map(function (item , i) {
            return <Route key={i} path={`/techno/:itemId`} component={Lang2} />
        });
        return routes
    }

    render() {
        return (
            <ul class="list-group">
                {this.GetLi()}
                {this.GetRoutes()}
            </ul>
        );
    }
}

export default Technologies;



const Lang2 = ({match}) =>{
  return  <div>
        {match.params.itemId}
    </div>
}