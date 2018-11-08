//should be called when '/me' is requested
import React from 'react';
import { connect } from 'react-redux';

class UserProfile extends React.Component {
  render() {
    console.log('UserProfile this.props :', this.props);
    const { displayName } = this.props.userData;
    const { externalURL } = this.props.userData;

    console.log(externalURL);

    //redirects to user's Spotify Profile
    const redirectToProfile = () => {
      window.location.replace(externalURL);
    };

    return (
      <div>
        <h3>Logged In User: {displayName} </h3>
        <img src={this.props.userData.imageURL} alt="" />
        <button
          type="button"
          onClick={() => {
            redirectToProfile();
          }}
        >
          Spotify Profile
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.userInfo
  };
};

export default connect(mapStateToProps)(UserProfile);
