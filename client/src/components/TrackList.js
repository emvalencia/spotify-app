import React from 'react';
//import './TrackList.css';

//converts from ms to min:second format
export default class TrackList extends React.Component {
  msToMinSecConversion = (duration_ms) => {
    var min = Math.floor(duration_ms / 60000);
    var sec = ((duration_ms % 60000) / 1000).toFixed(0);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  render() {
    console.log('TrackList props: ', this.props);

    //creates an array of tracks and track information
    let trackArray = [];

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
      const album = this.props.payload.tracks.items[i].album.name;
      const albumLink = this.props.payload.tracks.items[i].album.external_urls.spotify;
      const trackLink = this.props.payload.tracks.items[i].external_urls.spotify;

      //push contents of track into the tempArray
      tempArray.push(i + 1); //pushes the number of the track/search number
      tempArray.push(name);
      tempArray.push(duration);
      tempArray.push(artist);
      tempArray.push(album);

      //TESTING: links
      tempArray.push(trackLink); //at track[5]
      tempArray.push(artistLink); //at track[6]
      tempArray.push(albumLink); //at track[7]

      //add this tracks info to the trackArray
      trackArray.push(tempArray);
    }

    //TODO: Enable toggle to hide artist, album, or both
    //used to list the tracks of an artist's album once we click on their profile
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
              <th scope="col">Primary Artist</th>
              <th scope="col">Album</th>
            </tr>
          </thead>
          <tbody>
            {trackArray.map((track) => {
              //for main search page
              if (hideAlbum == false && hideArtist == false) {
                return (
                  <tr key={track}>
                    {' '}
                    {/*not sure what to put for key for now*/}
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
              }
              //hideArtist is true, hides artist only, for artist page
              else if (hideArtist) {
                return (
                  <tr key={track}>
                    {' '}
                    <td>{track[0]}</td>
                    <td>{track[1]}</td>
                    <td>{track[2]}</td>
                    <td>{track[4]}</td>
                  </tr>
                );
              }
              //hideAlbum is true, hides album and artist columns, for album page
              else {
                return (
                  <tr key={track}>
                    {' '}
                    <td>{track[0]}</td>
                    <td>{track[1]}</td>
                    <td>{track[2]}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
