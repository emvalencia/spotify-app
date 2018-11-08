/* <h1>Search Spotify</h1>
<!--TODO: bind input's model to searchString-->
<input>
<!--TODO: bind select's model to searchCategory-->
<select>
	<!--TODO: loop over searchCategories to create dropdown options-->
	<!--populate body and text value https://www.w3schools.com/tags/att_option_selected.asp-->
</select>
<!--TODO: Call search function when the button is clicked-->
<button class="btn btn-light">Search</button>
<!--TODO: Display a carousel component if searching for an artist or album. Bind carousel's resources and give it a static carouselId.-->
<!--TODO: Display a track-list component if searching for a track. Bind track-list's tracks.--> */
//should be called when '/me' is requested
import React, { Component } from 'react';
import './Search.css';
import Carousel from './Carousel';

class Search extends Component {
  state = {
    inputValue: '',
    optionValue: 'artist',
    submit: false,
    searchResults: []
  };

  handleInput = (event) => {
    this.setState({ ...this.state, inputValue: event.target.value, submit: false });
  };

  handleOption = (event) => {
    this.setState({ ...this.state, optionValue: event.target.value, submit: false });
  };

  handleSubmit = async (event) => {
    console.log('handling submit');
    ///album/:id
    //${this.optionValue}/${this.inputValue}
    const response = await fetch(
      `http://localhost:8888/search/${this.state.optionValue}/${this.state.inputValue}` //inputValue --> spotifyId
    );
    const body = await response.json();
    console.log('handleSubmit body', body);
    this.setState({ ...this.state, searchResults: body, submit: true });
  };

  render() {
    const { submit } = this.state;
    const { optionValue } = this.state;
    const renderCarousel =
      optionValue === 'artist' || optionValue === 'album' ? true : false;

    let searchResultElement = null;

    if (submit && renderCarousel)
      searchResultElement = <Carousel payload={this.state.searchResults} />;
    else if (submit) searchResultElement = <div>render track list</div>;

    return (
      <div className="col-6">
        <h3>Search Spotify</h3>
        <div className="row">
          <span>
            <input
              placeholder="Search for Spotify Stuff"
              value={this.state.inputValue}
              onChange={this.handleInput}
            />
          </span>
          <select value={this.state.value} onChange={this.handleOption}>
            <option value="artist">artist</option>
            <option value="track">track</option>
            <option value="album">album</option>
          </select>
          <button className="btn btn-light" onClick={this.handleSubmit}>
            Search
          </button>
        </div>

        {searchResultElement}
      </div>
    );
  }
}

export default Search;
