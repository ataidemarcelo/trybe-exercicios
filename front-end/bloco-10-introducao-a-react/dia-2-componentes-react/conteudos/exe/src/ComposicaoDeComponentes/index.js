import React, { Component } from 'react';

import Composicao from './Composicao';
import UserProfile from './UserProfile';

import users from './userData';

class ComposicaoDeComponentes extends Component {
  render() {
    return (
      <>
        <Composicao />
        { users.map((user) => <UserProfile key={user.id} user={user} />) }
      </>
    );
  }
}

export default ComposicaoDeComponentes;
