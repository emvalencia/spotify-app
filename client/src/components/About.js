//should be called when '/me' is requested
import React from 'react';
import { connect } from 'react-redux';
import './About.css';

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      toggleInfo: false
    };
  }

  toggle = () => {
    this.setState({
      toggleInfo: !this.state.toggleInfo
    });
  };

  render() {
    console.log('About this.props :', this.props);

    console.log('here', this.state);

    const { displayName } = this.props.userData;
    const { externalURL } = this.props.userData;

    console.log('externalURL: ', externalURL);
    console.log('state', this.state);
    return (
      <div className="col-6">
        <button class="btn btn-light" onClick={this.toggle}>
          Load info about me
        </button>
        <h3>Logged In User: {displayName} </h3>
        <img src={this.props.userData.imageURL} alt="" />
        <p>
          <a href={externalURL} className="btn btn-dark" target="_blank">
            Open profile on Spotify
          </a>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.userInfo
  };
};

export default connect(mapStateToProps)(About);
