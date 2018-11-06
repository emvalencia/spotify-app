import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import UserProfile from './UserProfile'; //testing data retrieval

export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <UserProfile />
      </div>
    );
  }
}
