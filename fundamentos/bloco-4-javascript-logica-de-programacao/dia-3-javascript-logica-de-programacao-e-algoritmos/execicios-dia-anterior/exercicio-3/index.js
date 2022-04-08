// Eu resolvi o problema?
// Havia outras maneiras de resolver o problema?
// A maneira que eu escolhi foi a mais eficiente possível, ou havia como fazer a mesma coisa com menos passos?
// Seria possível inverter ou retirar algum passo?
// Se eu fosse um computador, conseguiria entender todas as instruções?

/* 
  ENUNCIADO:
  Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

  PASSO A PASSO (baby steps):

  - Criar um array de números
  - Criar uma variável para usar como acumulador
  - Criar uma variável que armazena a quatidade de items no array
  - Percorrer o array utilizando uma estrutura de repetição 'for' ou 'for/of'
  - Acessar o valor de cada item do array e adicionar a variavel que ira acumular
  - Criar uma variável para receber a média aritmética
  - Imprimir o valor da média aritmética
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let accumulator = 0;
let quantityOfItems = numbers.length;

for (let index = 0; index < quantityOfItems; index += 1) {
  accumulator += numbers[index];
}

let average = accumulator / quantityOfItems;

console.log(average);
