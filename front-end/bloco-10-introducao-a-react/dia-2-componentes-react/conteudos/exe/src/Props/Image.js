import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    return (
      <img src={this.props.source} alt={this.props.alternativeText} />
    );
  }
}

Image.propTypes = {
  source: PropTypes.string.isRequired,
  alternativeText: PropTypes.string.isRequired
}

export default Image;
