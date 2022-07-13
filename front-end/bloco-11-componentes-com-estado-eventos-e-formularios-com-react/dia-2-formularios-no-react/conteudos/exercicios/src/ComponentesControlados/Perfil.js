import React, { Component } from "react";

class Perfil extends Component {
  render() {
    const { profile, handleChange } = this.props;
    const { name, email } = profile;

    let error = undefined;  
    if (name.length === 0) error = "Não não pode estar vazio!";

    return (
      <fieldset>
        <legend>Perfil</legend>

        <label htmlFor="name">Nome:</label>
        <input 
          id="name"
          type="text" 
          name="name"
          value={name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input 
          id="email"
          type="text" 
          name="email"
          value={email}
          onChange={handleChange}
        />
        { error ? error : '' }

      </fieldset>
    );
  }
}

export default Perfil;
