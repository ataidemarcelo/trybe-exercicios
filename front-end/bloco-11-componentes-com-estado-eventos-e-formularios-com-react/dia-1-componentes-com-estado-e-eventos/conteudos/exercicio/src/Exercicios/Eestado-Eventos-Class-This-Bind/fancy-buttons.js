import React, { Component } from 'react';


class FancyButtons extends Component {
  constructor() {
    super();

    this.increaseOne = this.increaseOne.bind(this);
    this.decreaseOne = this.decreaseOne.bind(this);
    this.returnToZero = this.returnToZero.bind(this);

    this.state = {
      value: 0,
      background: 'green',
    }
  }

  increaseOne() {
    console.log('Adicionou!');
    this.setState(
      (prev, _props) => ({ value: prev.value + 1 }), 
      () => this.changeBackground()
    );
  }

  decreaseOne() {
    console.log('Diminuiu!');
    this.setState((prev, _props) => {
      if (prev.value === 0) return;
      return { value: prev.value - 1 } 
    }, () => this.changeBackground());
  }

  returnToZero() {
    console.log('Zerou!');
    this.setState({ value: 0 }, () => this.changeBackground());
  }

  changeBackground() {
    if (this.state.value % 2 === 0) {
      this.setState({ background: 'green' }, () => console.log(this.state.background))
      return;
    }
    this.setState({ background: 'blue' }, () => console.log(this.state.background))
  }

  render() {
    const styleBtn = {
      backgroundColor: this.state.background,
      color: 'white'
    }

    return (
      <div>
        <p>{this.state.value}</p>
        <button style={styleBtn} onClick={this.increaseOne}>Incrementar</button>
        <button onClick={this.decreaseOne}>Decrementar</button>
        <button onClick={this.returnToZero}>Zerar</button>
      </div>
    );
  }
}

export default FancyButtons;
