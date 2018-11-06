import React, { Component } from 'react';
import { connect } from 'react-redux'; // allows components to call action creators
import * as actions from './actions/index'; // import all action creators
import './App.css';
//import NavBar from './components/NavBar';
import MainPage from './components/MainPage';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser(); // in the future declare
  }

  render() {
    return <MainPage />;
  }
}

export default connect(
  null, // what the component is actively listening to
  actions // what the component can change in the store variable via actions/dispatch
)(App);
