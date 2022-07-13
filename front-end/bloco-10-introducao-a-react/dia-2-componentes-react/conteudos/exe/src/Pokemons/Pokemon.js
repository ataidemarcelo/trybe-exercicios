import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, image, averageWeight } = this.props.pokemon;
    const { value, measurementUnit } = averageWeight;
    
    return (
      <div className="Pokemon-card">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>Average weight:  {`${value.toFixed(1)} ${measurementUnit}`}</p>
        </div>
        <img src={image} alt={`Pokemon: ${name} `} />
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string
    })
  })
}

export default Pokemon;
