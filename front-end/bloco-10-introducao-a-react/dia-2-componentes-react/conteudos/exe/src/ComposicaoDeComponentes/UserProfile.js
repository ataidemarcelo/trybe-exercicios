import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Image from '../Props/Image';

class UserProfile extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.user.name}</h1>
        <p>{this.props.user.email}</p>
        <Image 
          source={this.props.user.avatar}  
          alternativeText={`Avatar do usuário ${this.props.user.name}`}
        />
      </div>
    );
  }
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
  })
}

export default UserProfile;
