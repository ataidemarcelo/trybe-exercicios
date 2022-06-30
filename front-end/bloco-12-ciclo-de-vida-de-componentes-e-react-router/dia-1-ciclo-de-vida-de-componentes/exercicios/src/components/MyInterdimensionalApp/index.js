import React, { Component } from "react";

import './style.css';

class MyInterdimensionalApp extends Component {
  constructor(props){
    super(props);
    this.state = {
        characters: [],
    };
  }

  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState(
        {characters: data.results},
        // () => console.log(this.state.characters)
      )
    })
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.state;
    return (
      <>
        <h1>MyInterdimensionalApp</h1>
        <div className="App">
          <h1>
            Ricky and Morty Characters:
          </h1>
          <div className="body">
            {characters.map(({ name, image }) => {
              return (
                <div className="container" key={name}>
                  <img src={image} alt={name}/>
                  <h3>{name}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </>
    );
  }
}

export default MyInterdimensionalApp;
