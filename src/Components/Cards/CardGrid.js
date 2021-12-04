import React from "react";
import Card from "./Card";

// mapping over each Character in the API data, and returning that characte to their own Card


const CardGrid = ({ character }) => {
  return (
    <div className="grid">
      {character.map((character) => {
        return <Card character={character} />;
      })}
    </div>
  );
};

export default CardGrid;
