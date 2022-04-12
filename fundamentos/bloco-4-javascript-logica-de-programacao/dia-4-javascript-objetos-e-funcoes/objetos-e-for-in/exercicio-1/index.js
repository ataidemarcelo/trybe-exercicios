let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

for (let key in info) {
  if (key === 'personagem') {
    console.log('Bem vinda, ' + info['personagem']);
  }
}

