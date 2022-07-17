import React, { Component } from 'react';

class ValidEmail extends Component {
  verifyEmail = (email) => {
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    return emailRegex.test(email);
  };

  render() {
    const { email } = this.props;
    return (
      <div>
        <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
        <h3>{(this.verifyEmail(email) ? 'Email Válido' : 'Email Inválido')}</h3>
      </div>
    );
  }
}

export default ValidEmail;
