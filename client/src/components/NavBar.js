import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBarItem from './NavBarItem';

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
      <nav className="blue-grey darken-3 sticky-menu">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            Spotify App
          </a>

          <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>

          <ul className="right hide-on-med-and-down">
            <NavBarItem title="link 1" link="someLink1" />
            <NavBarItem title="link 2" link="someLink2" />
            <NavBarItem title="link 2" link="someLink3" />
            {auth !== null && (
              <NavBarItem title={loginHandlerTitle} link={loginHandlerLink} />
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

// this allows NavBar to "listen" to state values and react to auth
function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(NavBar);
