// Eu resolvi o problema?
// Havia outras maneiras de resolver o problema?
// A maneira que eu escolhi foi a mais eficiente possível, ou havia como fazer a mesma coisa com menos passos?
// Seria possível inverter ou retirar algum passo?
// Se eu fosse um computador, conseguiria entender todas as instruções?

/* 
  ENUNCIADO:
    Com o mesmo código do exercício anterior, caso o valor final seja maior que 20,
  imprima a mensagem: "valor maior que 20". Caso não seja, imprima a 
  mensagem: "valor menor ou igual a 20";

  PASSO A PASSO (baby steps):

  - Criar um array de números
  - Criar uma variável para usar como acumulador
  - Criar uma variável que armazena a quatidade de items no array
  - Percorrer o array utilizando uma estrutura de repetição 'for' ou 'for/of'
  - Acessar o valor de cada item do array e adicionar a variavel que ira acumular
  - Criar uma variável para receber a média (divisão do total no acumulador pela qtd de items)
  - Verifica se a média é menor ou igual a 20
    - Se for imprimir a mensagem: 'Valor menor ou igual a 20'
    - Se não for imprimir a mensagem: 'Valor maior 20'
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let accumulator = 0;
let quantityOfItems = numbers.length;

for (let index = 0; index < quantityOfItems; index += 1) {
  accumulator += numbers[index];
}

let average = accumulator / quantityOfItems;

if (average <= 20) {
  console.log('Valor menor ou igual a 20')
  return;
} 

console.log('Valor maior que 20');
