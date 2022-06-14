import React, { Component } from 'react';
import Greeting from './Greeting';
import Image from './Image';

class Props extends Component {
  render() {
    return (
      <>
        <Greeting firstname="Marcelo" lastname="Ataíde" />
        <Image
          source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
          alternativeText="Cute cat staring"
        />
      </>
    );
  }
}

export default Props;
