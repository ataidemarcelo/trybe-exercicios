import React, { Component } from 'react';
import Joke from './joke';

class MyJokeComponent extends Component {
  constructor() {
    super();

    this.fetchJoke = this.fetchJoke.bind(this);
    this.saveJoke = this.saveJoke.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  async fetchJoke() {
    this.setState(
      { loading: true },
      async () => {
        const requestHeaders = { headers: { Accept: 'application/json' } }
        const response = await fetch('https://icanhazdadjoke.com/', requestHeaders);
        const data = await response.json();
        this.setState({
          loading: false,
          jokeObj: data
        });
      }
    );
  }

  saveJoke() {
    this.setState(({ jokeObj, storedJokes }) => ({
      storedJokes: [...storedJokes, jokeObj]
    }))

    this.fetchJoke();
  }

  componentDidMount() {
    this.fetchJoke();
  }

  render() {
    const { jokeObj, loading, storedJokes } = this.state;
    const loadingSpan = <span>Loading...</span>;
    return (
      <>
        <h1>MyJokeComponent</h1>
        {storedJokes.map((item) => (<p key={item.id}>{item.joke}</p>))}
        { loading 
          ? loadingSpan 
          : <Joke jokeObj={jokeObj} saveJoke={this.saveJoke}/> }
      </>
    );
  }
}

export default MyJokeComponent;
