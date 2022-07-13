import React, { Component } from 'react';

import Pokemon from './Pokemon';

import './pokedex.css';
import pokemons from './pokemonsData';


class Pokedex extends Component {
  render() {
    return (
      <>
        <h1>Pokedex</h1>
        <div className="Pokedex-container">
          {pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} /> )}
        </div>
      </>
    );
  }
}

export default Pokedex;
