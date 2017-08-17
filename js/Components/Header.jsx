import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'



class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">{this.props.companyName}</a>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">

              <NavLink to="/" className="nav-link">Home</NavLink>

            </li>
            <li className="nav-item">
              <NavLink to="/Technologies" className="nav-link">Technologies</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/technos">Contact</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</a>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <NavLink className="dropdown-item" to="/About">About</NavLink>
                <NavLink className="dropdown-item" to="/ToMyAss">Another action</NavLink>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>


    );
  }
}

export default Header;