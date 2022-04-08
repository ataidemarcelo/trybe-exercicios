// Eu resolvi o problema?
// Havia outras maneiras de resolver o problema?
// A maneira que eu escolhi foi a mais eficiente possível, ou havia como fazer a mesma coisa com menos passos?
// Seria possível inverter ou retirar algum passo?
// Se eu fosse um computador, conseguiria entender todas as instruções?

/* 
  ENUNCIADO:
  Utilizando for , descubra qual o maior valor contido no array e imprima-o;

  PASSO A PASSO (baby steps):

  - Criar um array de números
  - Criar uma variável para guardar o maior valor
  - Percorrer o array utilizando uma estrutura de repetição 'for'
  - A cada iteração verifica se a variavel com maior valor é menor que o valor do item no array
    - Se for, reatribuir na variável com maior valor, o valor atual do item do array 
    - Se não for, continua a iteração
  - Imprimir a variável com maior valor
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let highestValue = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (highestValue < numbers[index]) {
    highestValue = numbers[index];
  }
}

console.log(highestValue);
