import React from "react";

const Suggestions = ({ suggestions, setMovie }) => {
  return suggestions.map(suggestions => {
    return (
      <li key={suggestions.id} onClick={() => setMovie(suggestions)}>
        {suggestions.title}
      </li>
    );
  });
};
export default Suggestions;
