import React, { Component } from 'react';
import Perfil from './Perfil';

class ComponentesControlado extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      email: '',
      estadoFavorito: '',
      idade: 0,
      vaiComparecer: false,
      select: 'valor2',
      conceito: ''
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { 
        name,
        email,
        estadoFavorito, 
        idade, 
        vaiComparecer, 
        select } = this.state;

    const style = {
      display: 'flex',
      flexDirection: 'column',
      width: '600px',
      margin: 'auto',
    }

    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form style={style} className="form">
          <Perfil profile={{ name, email }} handleChange={this.handleChange}/>

          <label style={style}>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
              <textarea 
                name="estadoFavorito"
                placeholder="Digite aqui!!!"
                value={estadoFavorito} 
                onChange={this.handleChange}
              />
          </label>

          <label htmlFor="idade">
            digite sua idade:
            <input
              id="idade"
              type="number"
              name="idade"
              value={idade}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="vaiComparecer">
            Eu vou comparecer!!!
            <input
              id="vaiComparecer"
              type="checkbox"
              name="vaiComparecer"
              value={vaiComparecer}
              onChange={this.handleChange}
            />
          </label>

          <fieldset onChange={this.handleChange}>
            <legend>Conceito</legend>

            <input type="radio" name="conceito" id="prop" value="prop" />
            <label htmlFor="prop">Propriedade</label>

            <input type="radio" name="conceito" id="state" value="state" />
            <label htmlFor="state">Estado</label>

            <input type="radio" name="conceito" id="event" value="event" />
            <label htmlFor="event">Eventos</label>
          </fieldset>
          
          <select
            id="select"
            name="select" 
            value={select}
            onChange={this.handleChange}
          >
            <option value="valor1">Valor 1</option>
            <option value="valor2">Valor 2</option>
            <option value="valor3">Valor 3</option>
            <option value="valor3">Valor 4</option>
            <option value="valor3">Valor 5</option>
          </select>
        </form>
      </div>
    );
  }
}

export default ComponentesControlado;
