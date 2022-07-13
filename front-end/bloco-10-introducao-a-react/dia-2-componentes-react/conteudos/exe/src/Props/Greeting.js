import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greeting extends Component {
  render() {
    return (
      <h1>Olá, {this.props.firstname} {this.props.lastname}!</h1>
    );
  }
}

Greeting.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired
}

export default Greeting;
