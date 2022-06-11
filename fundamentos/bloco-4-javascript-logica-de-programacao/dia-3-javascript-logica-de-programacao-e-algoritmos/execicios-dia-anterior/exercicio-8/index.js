// Eu resolvi o problema?
// Havia outras maneiras de resolver o problema?
// A maneira que eu escolhi foi a mais eficiente possível, ou havia como fazer a mesma coisa com menos passos?
// Seria possível inverter ou retirar algum passo?
// Se eu fosse um computador, conseguiria entender todas as instruções?

/* 
  ENUNCIADO:
  Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado.

  PASSO A PASSO (baby steps):

  - Criar um array de números vazio
  - Iterar 25 vezes o array utilizando uma estrutura de repetição 'for'
  - A cada iteração adicionando o valor do index ao array
  - Imprimir o valor do array
*/

let array = [];

for (let index = 0; index < 25; index += 1) {
  array.push(index + 1);
}

console.log(array);
