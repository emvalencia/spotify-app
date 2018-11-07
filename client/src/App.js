import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'; // allows components to call action creators
import * as actions from './actions/index'; // import all action creators
import './App.css';
//import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import UserProfile from './components/UserProfile';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser(); // in the future declare as type
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route path="/me" component={UserProfile} />
              {/* <Route path="/get-involved" component={GetInvolved} />
            <Route path="/resources" component={Resources} />
            <Route path="/contact" component={Contact} /> */}
              <Redirect to="/" />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null, // what the component is actively listening to
  actions // what the component can change in the store variable via actions/dispatch
)(App);
