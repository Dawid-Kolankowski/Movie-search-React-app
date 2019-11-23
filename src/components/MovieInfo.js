import React from "react";
import { connect } from "react-redux";
import StarRatings from "react-star-ratings";
import axios from "axios";
import { throws } from "assert";
class MovieInfo extends React.Component {
  state = {
    genres: []
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?",
      {
        params: {
          language: "en-US",
          api_key: "a7fe95d8f28e2004483d7c51aa72042b"
        }
      }
    );
    console.log("ebe");
    this.setState({ genres: response.data.genres });
  }

  getGenres = (selected_movie_genre, genre_list) => {
    let genres_return = "";
    for (let i in selected_movie_genre) {
      for (let y in genre_list) {
        if (
          genre_list[y].id === selected_movie_genre[i] &&
          i != selected_movie_genre.length - 1
        ) {
          genres_return += genre_list[y].name + ", ";
          break;
        } else if (
          genre_list[y].id === selected_movie_genre[i] &&
          i == selected_movie_genre.length - 1
        ) {
          genres_return += genre_list[y].name;
          break;
        }
      }
    }
    console.log(genres_return);
    return genres_return;
  };

  render() {
    let genres =
      this.props.movie.genre_ids !== undefined &&
      this.props.movie.genre_ids.length !== 0
        ? this.getGenres(this.props.movie.genre_ids, this.state.genres)
        : "No data";

    if (this.props.movie.length === 0) {
      return null;
    } else {
      return (
        <div className="movie-info">
          <div>
            {this.props.movie.poster_path === null ? null : (
              <img
                alt="poster"
                src={`https://image.tmdb.org/t/p/w300/${this.props.movie.poster_path}`}
              />
            )}
          </div>

          <div className="movie-description">
            <h1>{this.props.movie.title}</h1>

            <div>
              <h3>Summary</h3>
              <p>{this.props.movie.overview}</p>
            </div>
            <div>
              <h3>Genre</h3>
              {genres}
            </div>

            <div>
              <h3>Rating</h3>
              <StarRatings
                numberOfStars={10}
                rating={this.props.movie.vote_average}
                starDimension="40px"
                starSpacing="0px"
                starRatedColor="gold"
              />
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    movie: state.selectedMovie.movie
  };
};
export default connect(mapStateToProps)(MovieInfo);
