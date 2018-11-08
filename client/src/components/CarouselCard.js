import React from 'react';

export default class CarouselCard extends React.Component {
  render() {
    console.log('CarouselCard props :', this.props);
    const { index } = this.props;
    const { url } = this.props.imageInfo ? this.props.imageInfo : '';
    const { name } = this.props;
    const { id } = this.props;

    // TODO:  
    // refactor this, might be missing a link
    // but maybe we just need the id to query things?
    if (index === 0)
      return (
        <div className="carousel-item active">
          <img className="d-block w-140" src={url} alt="album or artist" />
          <div className="carousel-caption d-none d-md-block">
            <h5>{name}</h5>
            <h5>{id}</h5>
          </div>
        </div>
      );
    else
      return (
        <div className="carousel-item">
          <img className="d-block w-140" src={url} alt="album or artist" />
          <div className="carousel-caption d-none d-md-block">
            <h5>{name}</h5>
            <h5>{id}</h5>
          </div>
        </div>
      );
  }
}
