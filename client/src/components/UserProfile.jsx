//should be called when '/me' is requested
import React from 'react';

let userProfileURI = 'http://api.spotify.com/v1/me';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: null //will fill with retrieved JSON data
    };
  }

  //automatically retrieves data on component mount, for some reason not working outside of class...
  componentDidMount = () => {
    console.log('Attempting to fetch UserProfile data...');
    

    // get data from react router/listening?
    // fetch(userProfileURI)
    //   .then((response) => response.json())
    //   .then((getData) => this.setState({ userData: getData }))
    //   .catch((error) => console.log('User profile data retrieval failed: ', error));
  };

  render() {
    //shows something on the screen if the data hasn't yet loaded, logs it on console
    if (!this.userData) {
      console.log('Attempting to load user profile data...');
      return <div>Loading User Data</div>;
    }

    //will return user profile dat
    return <div>Loaded!</div>;
  }
}


