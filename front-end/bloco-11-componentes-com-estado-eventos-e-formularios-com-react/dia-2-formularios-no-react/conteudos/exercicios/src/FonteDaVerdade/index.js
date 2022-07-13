import React, { Component } from 'react';
import Button from './Button';

class FonteDaVerdade extends Component {
  constructor() {
    super()

    this.state = {
      numeroDeCliques: 0,
    }
  }

  handleClick = () => {
    this.setState(
      (prev) => ({ numeroDeCliques: prev.numeroDeCliques + 1 }),
      () => console.log('Clicou!!!', this.state.numeroDeCliques) 
    );
    
  }

  render() {
    const { numeroDeCliques } = this.state;
    return (
      <>
        <h1>Uma única "Fonte da Verdade"</h1>
        <h2>O estado tem que ficar em um lugar só!!!</h2>
        <p>{numeroDeCliques}</p>
        <Button click={this.handleClick} />
      </>
    );
  }
}

export default FonteDaVerdade;
