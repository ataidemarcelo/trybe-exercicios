// Eu resolvi o problema?
// Havia outras maneiras de resolver o problema?
// A maneira que eu escolhi foi a mais eficiente possível, ou havia como fazer a mesma coisa com menos passos?
// Seria possível inverter ou retirar algum passo?
// Se eu fosse um computador, conseguiria entender todas as instruções?

/* 
  ENUNCIADO:
  Descubra quantos valores ímpares existem no array e imprima o resultado. 
  Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

  PASSO A PASSO (baby steps):

  - Criar um array de números
  - Criar uma variável para guardar a quantidade de valores ímpares
  - Percorrer o array utilizando uma estrutura de repetição 'for'
  - A cada iteração verifica se o item no array é ímpar
  - Se o item pelo operador módulo for diferente de zero é ímapar
    - Se for, incrementar a variável com a quantidade de valores ímpares
    - Se não for, continua a iteração
  - Se a quantidade de valores ímpares for igual a zero
    - se for imprimir 'Nenhum valor ímpar encontrado.' e parar a execução
    - se não for imprimir o resultado
*/

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers = [70, 8, 100, 2];

let numberOfOddValues = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    numberOfOddValues += 1;
  }
}

if (numberOfOddValues === 0) {
  console.log('Nenhum valor ímpar encontrado.')
  return;
}

console.log('Quantidade de valores ímpares = ' + numberOfOddValues);
