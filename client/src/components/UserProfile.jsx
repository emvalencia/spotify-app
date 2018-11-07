//should be called when '/me' is requested
import React from 'react';
import { connect } from 'react-redux';

class UserProfile extends React.Component {
  render() {
    console.log('UserProfile this.props :', this.props);
    const { display_name } = this.props.userData;
    
    console.log(display_name);
    

    return <div>{display_name}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.userInfo
  };
};

export default connect(mapStateToProps)(UserProfile);
