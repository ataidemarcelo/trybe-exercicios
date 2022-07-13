import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Album extends Component {
  render() {
    const { day, month, year } = this.props.album.releaseDate;
    return (
      <section>
        <img src={ this.props.album.image } alt={ this.props.album.title } />
        <h2>{ this.props.album.title }</h2>
        <p>{ this.props.album.releaseDate.year }</p>
        <p>
          Lançamento: {`${day }/${month}/${year}`}
        </p>
        <p>Gravadora: { this.props.album.others.recordCompany }</p>
        <p>Formatos: { this.props.album.others.formats }</p>
      </section>
    );
  }
}

Album.propTypes = {
  album: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    releaseDate: PropTypes.exact({
      year: PropTypes.string,
      month: PropTypes.string,
      day: PropTypes.string,
    }),
    others: PropTypes.shape({
      recordCompany: PropTypes.string,
      formats: PropTypes.string
    })
  })
}

export default Album;
