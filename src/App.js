  import React, { useState, useEffect } from "react";
  import "./Apps.css";
  import axios from 'axios';
  import Header from './Components/Header/Header'
  import CardGrid from './Components/Cards/CardGrid'


const App = () => {
  const [character, setCharacter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      return await axios.get(
        "https://rickandmortyapi.com/api/character/"
      );
    };

    fetchCharacter()
      .then(res => {
        setCharacter(res.data);
        setIsLoading (false);
      })
      .catch(err => {
        console.log("Error has occurred: ", err);
      });
  },[]);

  if (isLoading) {
    return (
      <h1 className="header-bar"> Loading...</h1>
    )
  }


  return (
    <div className="App">
      <Header />
      <CardGrid character={character.results} />
    </div>
  );
};

export default App;

