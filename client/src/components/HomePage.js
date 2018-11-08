import React, { Component } from 'react';
import About from './About'; //testing data retrieval

export default class MainPage extends Component {
  render() {
    return (
      <div class="row">
        <About />
        <About />
      </div>
    );
  }
}
