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
    return (
      <div className="carousel-item active">
        <img className="d-block w-100" src="..." alt="First slide" />
      </div>
    );
  }
}
