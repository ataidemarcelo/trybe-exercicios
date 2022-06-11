// Eu resolvi o problema?
// Havia outras maneiras de resolver o problema?
// A maneira que eu escolhi foi a mais eficiente possível, ou havia como fazer a mesma coisa com menos passos?
// Seria possível inverter ou retirar algum passo?
// Se eu fosse um computador, conseguiria entender todas as instruções?

/* 
  ENUNCIADO:
  Utilizando for , descubra qual o menor valor contido no array e imprima-o;

  PASSO A PASSO (baby steps):

  - Criar um array de números
  - Criar uma variável para guardar o menor valor e atribuir o valor do primeiro item no array
  - Percorrer o array utilizando uma estrutura de repetição 'for'
  - A cada iteração verifica se a variavel com menor valor é maior que o valor do item no array
    - Se for, reatribuir na variável com menor valor, o valor atual do item do array 
    - Se não for, continua a iteração
  - Imprimir a variável com menor valor
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numbers = [5, 9, 3, 19, 70, 8, 1, 2, 35, 27];

let smallestNumber = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  if (smallestNumber > numbers[index]) {
    smallestNumber = numbers[index];
  }
}

console.log(smallestNumber);
