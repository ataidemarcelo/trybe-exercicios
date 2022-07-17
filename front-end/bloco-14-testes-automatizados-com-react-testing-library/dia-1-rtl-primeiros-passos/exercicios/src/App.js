import { Component } from 'react';
import ValidEmail from './components/ValidEmail';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputEmail: '',
      email: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({ inputEmail: target.value });
  }

  handleClick = () => {
    const { inputEmail } = this.state;
    this.setState({ email: inputEmail, inputEmail: '' });
  }

  render () {
    const { inputEmail, email } = this.state;
    return (
      <div className="App">
        <h1>Form</h1>
        <form>
          <label htmlFor="id-email">
            Email:
          </label>
          <input
            type="email" 
            name="email" 
            id="id-email" 
            value={ inputEmail }
            onChange={ this.handleChange }
          />
          <button
            data-testid="id-send"
            onClick={ this.handleClick }
            type="button"
            value="Enviar"
          >Enviar</button>

          <button type="button">voltar</button>
          <ValidEmail email={ email } />
        </form>
        <p>learn react</p>
      </div>
    );
  }
}

export default App;

// Component.propTypes = {
//   requiredProp: PropTypes.string.isRequired,
//   optionalProp: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
//   ]).isRequired,
// }
