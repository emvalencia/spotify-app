//------------------------------------------------------------------------------------------------
// The Carousel component implements the functionality to switch between different albums or
// artists, depending on the optionValue and searchResults. Each artist/album is shown via a
// CarouselCard.
//------------------------------------------------------------------------------------------------
import React from 'react';
import CarouselCard from './CarouselCard';
import './Carousel.css';

export default class Carousel extends React.Component {
  render() {
    console.log('Carousel this.props :', this.props);
    //const { artists } = this.props.payload;
    let artists = null;
    const { albums } = this.props.payload;

    let arrayOfCards = null;

    // TODO: REFACTOR THIS!!!
    if (artists)
      arrayOfCards = artists.items.map((artist, index) => {
        const imageInfo = artist.images ? artist.images[0] : '';
        const id = artist.id ? artist.id : '';
        const name = artist.name ? artist.name : '';

        return (
          <CarouselCard
            imageInfo={imageInfo}
            id={id}
            key={id}
            index={index}
            name={name}
          />
        );
      });
    else if (albums)
      arrayOfCards = albums.items.map((album, index) => {
        const imageInfo = album.images ? album.images[0] : '';
        const id = album.id ? album.id : '';
        const name = album.name ? album.name : '';

        return (
          <CarouselCard
            imageInfo={imageInfo}
            id={id}
            key={id}
            index={index}
            name={name}
          />
        );
      });

    return (
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">{arrayOfCards}</div>

        <a
          className="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

//------------------------------------------------------------------------------------------------
// END Carousel component
//------------------------------------------------------------------------------------------------
