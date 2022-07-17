import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Verifica que, ao digitar o email e clicar em "Enviar", o valor do email é renderizado', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email:');
  const button = screen.getByRole('button', { name: /Enviar/i })

  userEvent.type(inputEmail, 'email@email.com');
  userEvent.click(button);

  expect(screen.getByText('Valor: email@email.com')).toBeInTheDocument();
});

test('Verifica se exisrem dois botões na tela', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(2);
});

test('Verifica se existe o botão de enviar', () => {
  render(<App />);
  const button = screen.getByTestId('id-send');

  expect(button).toBeInTheDocument();
  expect(button).toHaveValue('Enviar');
});

// test('Verifica que, ao digitar o email e clicar em "Enviar", o valor do email é renderizado', () => {
//   render(<App />);
//   const inputEmail = screen.getByLabelText('Email:');
//   const button = screen.getByTestId('id-send');
//   const userEmail = screen.getByTestId('id-email-user');

//   userEvent.type(inputEmail, 'marcelo@email.com');
//   userEvent.click(button);

//   expect(inputEmail).toHaveValue('');
//   expect(userEmail).toHaveTextContent('Valor: marcelo@email.com');
// });
