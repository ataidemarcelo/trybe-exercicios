// Eu resolvi o problema?
// Havia outras maneiras de resolver o problema?
// A maneira que eu escolhi foi a mais eficiente possível, ou havia como fazer a mesma coisa com menos passos?
// Seria possível inverter ou retirar algum passo?
// Se eu fosse um computador, conseguiria entender todas as instruções?

/**
 * ENUNCIADO:
 * crie um algoritmo que retorne o fatorial de 10.
 * 
 * PASSO A PASSO (baby steps):
 * 
 * Criar uma const com um número qualquer
 * Criar uma variácel para o fatorial com o valor 1
 * Criar um loop que itera a quantidade de vezes do valor do número
 * Decrementar o index até chegar a zero
 * Multiplicar a variavel fatorial pelo index e acumular seu valor a cada iteração.
 * 
 */

const number = 10;
let factorial = 1;

for (let index = number; index !== 0; index -= 1) {
  factorial = factorial * index
}

console.log(factorial)
