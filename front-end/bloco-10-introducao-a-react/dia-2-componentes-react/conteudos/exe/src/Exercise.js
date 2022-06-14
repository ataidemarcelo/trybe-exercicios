import React, { Component } from 'react';

import Props from './Props';
import ComposicaoDeComponentes from './ComposicaoDeComponentes';
import FixationExercise from './fixation-exercises-10-2';
import ShoppingList from './fixation-exercises-10-2/ShoppingList';

class Excercise extends Component {
  render() {
    return (
      <>
        <p>==============================Props================================</p>
        <Props />
        <p>==============================Composição===========================</p>
        <ComposicaoDeComponentes />
        <p>=========================Exercício de Fixação======================</p>
        <FixationExercise />
        <ShoppingList />
        <p>=================================FIM==================================</p>
      </>
    );
  }
}

export default Excercise;
