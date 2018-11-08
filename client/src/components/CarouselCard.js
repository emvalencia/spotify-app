// <!--TODO: bind href to the appropriate local URL for the album/artist/song.-->
// <a>
// <!--TODO bind src with the album/artist/song image URRL-->
// <img class="d-block w-100">
// <div class="carousel-caption d-none d-md-block">
// 	<!--TODO: populate h5 with the album/artist/song name-->
// 	<h5>???</h5>
// </div>
// </a>
import React from 'react';

export default class CarouselCard extends React.Component {
  render() {
    console.log('CarouselCard props :', this.props);
    const { url } = this.props.imageInfo ? this.props.imageInfo : '';
    console.log('CarouselCard imageURL :', url);
    return (
      <div className="carousel-item active">
        <img className="d-block w-100" src={url} alt="album or artist" />
      </div>
    );
  }
}
