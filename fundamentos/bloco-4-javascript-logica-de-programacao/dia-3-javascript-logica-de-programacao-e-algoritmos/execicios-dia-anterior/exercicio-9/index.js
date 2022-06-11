// Eu resolvi o problema?
// Havia outras maneiras de resolver o problema?
// A maneira que eu escolhi foi a mais eficiente possível, ou havia como fazer a mesma coisa com menos passos?
// Seria possível inverter ou retirar algum passo?
// Se eu fosse um computador, conseguiria entender todas as instruções?

/* 
  ENUNCIADO:
  Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

  PASSO A PASSO (baby steps):

  - Criar um array de números vazio
  - Iterar 25 vezes o array utilizando uma estrutura de repetição 'for'
  - A cada iteração adicionando o valor do index ao array
  - Soma um ao indice para não começar do zero
  - Imprimir o valor do item do array dividido por dois
*/

let array = [];

for (let index = 0; index < 25; index += 1) {
  array.push(index + 1);
  console.log(array[index] / 2);
}
