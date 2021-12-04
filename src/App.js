import React, { useState, useEffect } from "react";
import "./Apps.css";
import axios from 'axios';
import Header from './Components/Header/Header'
import CardGrid from './Components/Cards/CardGrid'


const App = () => {
  const [character, setCharacter] = useState(0);

  useEffect(() => {
    const fetchCharacter = async () => {
      return await axios.get(
        "https://rickandmortyapi.com/api/character/"
      );
    };

    fetchCharacter()
      .then(res => {
        setCharacter(res.data);
      })
      .catch(err => {
        console.log("Error has occurred: ", err);
      });
  },[]);

  // console.log(character);
  
  return (
    <div className="App">
      <Header />
      {character ? <CardGrid character={character.results} /> : null}
    </div>
  );
};

export default App;