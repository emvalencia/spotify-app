import React from 'react';
//import './TrackList.css';

//converts from ms to min:second format
export default class TrackList extends React.Component {
  msToMinSecConversion = (duration_ms) => {
    var min = Math.floor(duration_ms / 60000);
    var sec = ((duration_ms % 60000) / 1000).toFixed(0);
    return min + ':' + (sec < 10 ? '0' : '') + sec;
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
      const album = this.props.payload.tracks.items[i].album.name;

      //push contents of track into the tempArray
      tempArray.push(i + 1); //pushes the number of the track/search number
      tempArray.push(name);
      tempArray.push(duration);
      tempArray.push(artist);
      tempArray.push(album);

      //add this tracks info to the trackArray
      trackArray.push(tempArray);
    }

    console.log('Track array: ', trackArray);

    //think these are used to list the tracks of an artist's album once we click on their profile
    let hideArtist = false;
    let hideAlbum = true;

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
              return (
                <tr key={track}> {/*Key was required to prevent warning*/}
                  <td>{track[0]}</td>
                  <td>{track[1]}</td>
                  <td>{track[2]}</td>
                  <td>{track[3]}</td>
                  <td>{track[4]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
