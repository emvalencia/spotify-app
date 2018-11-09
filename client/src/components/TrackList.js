//------------------------------------------------------------------------------------------------
// The TrackList component handles the display and functionality of the track-list when searching
// via the main homepage.
//------------------------------------------------------------------------------------------------
import React, { Fragment } from 'react';
//import './TrackList.css';

//converts from ms to min:second format
export default class TrackList extends React.Component {
  msToMinSecConversion = (duration_ms) => {
    var min = Math.floor(duration_ms / 60000);
    var sec = ((duration_ms % 60000) / 1000).toFixed(0);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  searchTrackElement = (track) => (
    <Fragment>
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
    </Fragment>
  );

  expandedTable = () => (
    <Fragment>
      <th scope="col">Primary Artist</th>
      <th scope="col">Album</th>
    </Fragment>
  );

  render() {
    console.log('TrackList props: ', this.props);

    //creates an array of tracks and track information
    let trackArray = [];

    //REFACTOR THIS
    for (let i = 0; i < 20; i++) {
      //initialize a tempArray to hold each track's info
      let tempArray = [];

      //get information from each track
      const { name } = this.props.payload.tracks.items[i];
      const { duration_ms } = this.props.payload.tracks.items[i];
      const duration = this.msToMinSecConversion(duration_ms);
      const artist = this.props.payload.tracks.items[i].artists[0].name;
      const artistLink = this.props.payload.tracks.items[i].artists[0].external_urls
        .spotify;

      //links
      const album = this.props.payload.tracks.items[i].album.name;
      const albumLink = this.props.payload.tracks.items[i].album.external_urls.spotify;
      const trackLink = this.props.payload.tracks.items[i].external_urls.spotify;

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

    //TODO: Enable toggle to hide artist, album, or both
    let hideArtist = false;
    let hideAlbum = false;

    //TODO: If there is an easier way to hide/select columns, the if/else statements may be unnecessary
    return (
      <div>
        <table className="table table-sm table-light table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Track</th>
              <th scope="col">Duration</th>
              {hideAlbum && hideArtist ? null : this.expandedTable()}
            </tr>
          </thead>
          <tbody>
            {trackArray.map((track, index) => {
              //updates table on main search page
              return (
                <tr key={index}>
                  {/*not sure what to put for key for now*/}
                  <td>{track[0]}</td>
                  <td>
                    <a href={track[5]} target="_blank">
                      {track[1]}
                    </a>
                  </td>
                  <td>{track[2]}</td>
                  {hideAlbum && hideArtist ? null : this.searchTrackElement(track)}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

//------------------------------------------------------------------------------------------------
// END TrackList component
//------------------------------------------------------------------------------------------------
