import { render, screen } from '@testing-library/react';
import ValidEmail from '../components/ValidEmail';


describe('ValidEmail', () => {
  test('verifica se o email é válido.', () => {
    const EMAIL_USER = 'marcelo@email.com';
    render(<ValidEmail email={ EMAIL_USER }/>);
    const isValid = screen.getByText('Email Válido');
    expect(isValid).toBeInTheDocument();
  });

  test('verifica comportamento, caso o email seja inválido.', () => {
    const EMAIL_USER = 'emailErrado';
    render(<ValidEmail email={ EMAIL_USER }/>);
    const isValid = screen.getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
  });
});
