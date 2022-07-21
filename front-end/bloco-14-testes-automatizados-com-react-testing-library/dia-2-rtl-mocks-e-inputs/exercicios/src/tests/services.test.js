// import React from 'react';
// import { render, screen } from '@testing-library/react';
import * as funcs from './services';

// Crie uma função que gere um número aleatório
// Defina uma função que gere um número aleatório entre 0 e 100.
// Desenvolva os testes para essa função.
// Utilize o mock e defina o retorno padrão como 10.
// Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

describe('Service', () => {
  test('verifica se geraNum esta sendo chamada', () => {
    funcs.geraNum = jest.fn().mockReturnValue(10);
    funcs.geraNum();
    expect(funcs.geraNum()).toBe(10);
    expect(funcs.geraNum).toHaveBeenCalled();
    expect(funcs.geraNum).toHaveBeenCalledTimes(2);
  });
});
