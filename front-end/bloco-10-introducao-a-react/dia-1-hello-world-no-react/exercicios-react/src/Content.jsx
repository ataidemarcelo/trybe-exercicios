import React, { Component } from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
  render() {
    return (
      <div>
        <h2>O conteúdo é: </h2>
        <p>---------------------------------------------</p>
        {conteudos.map((conteudo) => (
          <>
            <h4>{conteudo.conteudo}</h4>
            <p>Status: {conteudo.status}</p>
            <p>Bloco: {conteudo.bloco}</p>
            <p>---------------------------------------------</p>
          </>
        ))}
      </div>
    );
  }
}

export default Content;
