import React, { Component } from "react";

class Button extends Component {
  render() {
    const { click } = this.props;
    return (
      <button onClick={click}>Botão</button>
    );
  }
}

export default Button;
