//should be called when '/me' is requested
import React, { Fragment } from 'react';
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
    const { displayName } = this.props.userData;
    const { externalURL } = this.props.userData;

    let elements = (
      <Fragment>
        <h3>Logged In User: {displayName} </h3>
        <img src={this.props.userData.imageURL} alt="" />
        <p>
          <a href={externalURL} className="btn btn-light" target="_blank">
            Open profile on Spotify
          </a>
        </p>
      </Fragment>
    );

    const { toggleInfo } = this.state;
    const buttonText = !toggleInfo ? 'Load Info About Me' : 'Hide Info';

    return (
      <div className="col-6">
        <button className="btn btn-light" onClick={this.toggle}>
          {buttonText}
        </button>
        {toggleInfo ? elements : null}
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
