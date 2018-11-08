import React from 'react';
import CarouselCard from './CarouselCard';

export default class Carousel extends React.Component {
  render() {
    console.log('Carousel this.props :', this.props);
    const { artists } = this.props.payload;
    const { albums } = this.props.payload;
    console.log('artists :', artists);
    console.log('albums :', albums);

    let arrayOfCards = null;
    if (artists)
      arrayOfCards = artists.items.map((artist) => {
        const imageInfo = artist.images ? artist.images[1] : '';
        const id = artist.id ? artist.id : '';
        console.log('imageInfo :', imageInfo);
        console.log('id :', id);
        return <CarouselCard imageInfo={imageInfo} key={id} />;
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
