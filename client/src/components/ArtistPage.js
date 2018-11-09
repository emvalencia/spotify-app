import React, { Fragment } from 'react';
import TrackList from './TrackList';
import defaultImage from '../assets/unknown.jpeg';
import './ArtistPage.css';

class ArtistPage extends React.Component {
  state = { displayName: '', imageURL: '', externalURL: '', genres: [], tracks: [] };
  componentDidMount() {
    // do fetch with id
    // then update state

    fetch(`http://localhost:8888/artist/${this.props.match.params.id}`).then(
      (response) => {
        const body = response.json().then((parsedBody) => {
          console.log('artist parsedBody :', parsedBody);

          let imageURL = parsedBody.images ? parsedBody.images[0].url : '';
          const { genres } = parsedBody;

          if (!imageURL) {
            imageURL = defaultImage;
          }

          this.setState({
            displayName: parsedBody.name,
            imageURL: imageURL,
            externalURL: parsedBody.external_urls.spotify,
            genres: genres
          });
        });
      }
    );
    fetch(`http://localhost:8888/artist-top-tracks/${this.props.match.params.id}`).then(
      (response) => {
        const body = response.json().then((parsedBody) => {
          console.log('artist-top-tracks parsedBody :', parsedBody);
          const trackCopy = parsedBody.tracks.concat();
          this.setState({
            ...this.state,
            tracks: trackCopy
          });
        });
      }
    );
  }
  msToMinSecConversion = (duration_ms) => {
    var min = Math.floor(duration_ms / 60000);
    var sec = ((duration_ms % 60000) / 1000).toFixed(0);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  render() {
    console.log('ArtistPage this.props', this.props);
    console.log('ArtistPage this.state', this.state);
    console.log('ArtistPage this.props.match.params.id :', this.props.match.params.id);
    const { displayName } = this.state;
    const { externalURL } = this.state;
    const { genres } = this.state;
    const { tracks } = this.state;

    let genresElements = null;
    genresElements = genres.map((genre) => {
      return <li key={genre}>{genre}</li>;
    });

    //creates an array of tracks and track information
    let trackArray = [];

    console.log('tracks:', tracks.length);

    //REFACTOR THIS
    for (let i = 0; i < tracks.length; i++) {
      //initialize a tempArray to hold each track's info
      let tempArray = [];

      //get information from each track
      const { name } = tracks[i];
      const { duration_ms } = tracks[i];
      const duration = this.msToMinSecConversion(duration_ms);
      const artist = tracks[i].artists[0].name;
      const artistLink = tracks[i].artists[0].external_urls.spotify;

      //links
      const album = tracks[i].album.name;
      const albumLink = tracks[i].album.external_urls.spotify;
      const trackLink = tracks[i].external_urls.spotify;

      //push contents of track into the tempArray
      tempArray.push(i + 1); //pushes the number of the track/search number
      tempArray.push(name);
      tempArray.push(duration);
      tempArray.push(artist);
      tempArray.push(album);

      //links necessary for redirection
      tempArray.push(trackLink); //at track[5]
      tempArray.push(artistLink); //at track[6]
      tempArray.push(albumLink); //at track[7]

      //add this tracks info to the trackArray
      trackArray.push(tempArray);
    }

    console.log('trackArray', trackArray);

    //contains the elements to be rendered on the homepage
    let elements = (
      <Fragment>
        <div className="row">
          {/*Artist Info*/}
          <div className="col-6">
            <h3>{displayName} </h3>
            <img id="artistImg" src={this.state.imageURL} alt="" />
            <p>
              <a href={externalURL} className="btn btn-light" target="_blank">
                Open {displayName} on Spotify
              </a>
            </p>
          </div>
          {/*Genres and tracks*/}
          <div className="col-2">
            <h3>Genres</h3>
            <ul>{genresElements}</ul>
            <p />
          </div>
          <div className="col-4">
            <h3>{displayName}'s Top Tracks</h3>
            <table className="table table-sm table-light table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Track</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Artist</th>
                  <th scope="col"> Album</th>
                </tr>
              </thead>
              <tbody>
                {trackArray.map((track, index) => {
                  //updates table on main search page
                  return (
                    <tr key={index}>
                      <td>{track[0]}</td>
                      <td>
                        <a href={track[5]} target="_blank">
                          {track[1]}
                        </a>
                      </td>
                      <td>{track[2]}</td>
                      <td>
                        <a href={track[6]} target="_blank">
                          {track[3]}
                        </a>
                      </td>
                      <td>
                        <a href={track[7]} target="_blank">
                          {track[4]}
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h3>{displayName}'s Albums</h3>
          </div>
          <div className="col-6">
            <h3>Similar Artists</h3>
          </div>
        </div>
      </Fragment>
    );

    return <div className="app-artist">{elements}</div>;
  }
}

export default ArtistPage;

{
  /* <div *ngIf="artist" class="row">
	<div class="col-6">
		<!--TODO: populate with artist name-->
		<h1></h1>
		<!--TODO: populate with artist image URL-->
		<img id="artistImg" src="../../../assets/unknown.jpg">
		<p>
			<!--TODO: link to artist page on spotify, display artist name-->
			<a class="btn btn-light" role="button" target="_blank">Open ??? on Spotify</a>
		</p>
	</div>
	<div class="col-2">
		<h3>Genres</h3>
		<ul>
			<!--TODO: loop over artist's genres and display them-->
			<li>???</li>
		</ul>
		<p>
		</p>
	</div>
	<div class="col-4">
		<!--TODO: display artist name-->
		<h3>???'s Top Tracks</h3>
		<!--TODO: display the track list for the album-->
	</div>
</div>

<div *ngIf="artist" class="row">
	<div class="col-6">
		<!--TODO: display artist name-->
		<h3>???'s Albums</h3>
		<!--TODO: Display a carousel component for the artist's albums. Bind carousel's resources and give it a static carouselId.-->
	</div>
	<div class="col-6">
		<h3>Similar Artists</h3>
		<!--TODO: Display a carousel component for similar artists. Bind carousel's resources and give it a static carouselId.-->
	</div>

</div> */
}
