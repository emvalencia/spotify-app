import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBarItem from './NavBarItem';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    console.log('NavBar this.props :', this.props);
    const { auth } = this.props;

    let loginHandlerTitle;
    let loginHandlerLink;

    if (auth) {
      loginHandlerTitle = 'Logout';
      loginHandlerLink = 'http://localhost:8888/api/logout'; // <--- not sure if this applies to us
    } else if (auth === false) {
      loginHandlerTitle = 'App Login';
      loginHandlerLink = 'http://localhost:8888/login';
    } else {
      console.log('login is null, do nothing: ', auth);
    }

    return (
      <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item navbar-brand">
            <a className="navbar-brand" href="/">
              Browsing spotify
            </a>
          </li>
        </ul>
        <ul className="navbar-nav navbar-right mr-auto">
          {auth !== null && (
            <NavBarItem title={loginHandlerTitle} link={loginHandlerLink} />
          )}
        </ul>
      </nav>
    );
  }
}

// this allows NavBar to "listen" to state values and react to auth
function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(NavBar);
