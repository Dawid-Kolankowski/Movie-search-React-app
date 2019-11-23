import React from "react";
import axios from "axios";
import Suggestions from "./Suggestions";
import { connect } from "react-redux";
import { setMovie } from "../actions";

class SearchBar extends React.Component {
  state = {
    searchBox: "",
    movies: []
  };

  async componentDidUpdate(_prevProps, prevState) {
    if (
      prevState.searchBox !== this.state.searchBox &&
      this.state.searchBox !== ""
    ) {
      const response = await axios.get(
        "http://api.themoviedb.org/3/search/movie?",
        {
          params: {
            query: this.state.searchBox,
            language: "en-US",
            api_key: "a7fe95d8f28e2004483d7c51aa72042b",
            page: "1",
            include_adult: "false"
          }
        }
      );

      this.setState({ movies: response.data.results.slice(0, 5) });
    }
  }

  onSelect = (selectedMovie) => {

    this.props.setMovie(selectedMovie)
    this.setState({movies:[],
    searchBox:""})
  };

  render() {
    let Popup;

    if (this.state.movies.length === 0) {
      Popup = null;
    } else {
      Popup = (
        <ul className="suggestion">
          <Suggestions
            setMovie={this.onSelect}
            suggestions={this.state.movies}
          />
        </ul>
      );
    }

    return (
      <div className="search-box">
        <input
          type="text"
          value={this.state.searchBox}
          onChange={e => this.setState({ searchBox: e.target.value })}
          placeholder="Find movie"
        />
        {Popup}
      </div>
    );
  }
}
export default connect(null, { setMovie })(SearchBar);
