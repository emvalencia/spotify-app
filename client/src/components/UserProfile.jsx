//should be called when '/me' is requested
import React from 'react';
import { connect } from 'react-redux';

class UserProfile extends React.Component {
  render() {
    console.log('UserProfile this.props :', this.props);
    const { displayName } = this.props.userData;

    return (
      <div>
        <img src={this.props.userData.imageURL} alt="" />
        <p> {displayName} </p>
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
