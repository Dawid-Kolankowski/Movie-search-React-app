import React from "react";
import "./styles.scss";
import SearchBar from "./SearchBar";
import MovieInfo from "./MovieInfo"
const App = () => {
  return (
    <div className="container" type="text">
      <SearchBar />
      <MovieInfo/>
    </div>
  );
};

export default App;
