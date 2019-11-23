import React from "react";

const Suggestions = ({ suggestions, setMovie }) => {
  return suggestions.map(suggestion => {
    return (
      <li key={suggestion.id} onClick={() => setMovie(suggestion)}>
        {suggestion.title}
      </li>
    );
  });
};
export default Suggestions;
