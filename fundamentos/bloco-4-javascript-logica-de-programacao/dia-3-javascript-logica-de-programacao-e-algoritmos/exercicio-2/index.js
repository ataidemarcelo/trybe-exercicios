// Eu resolvi o problema?
// Havia outras maneiras de resolver o problema?
// A maneira que eu escolhi foi a mais eficiente possível, ou havia como fazer a mesma coisa com menos passos?
// Seria possível inverter ou retirar algum passo?
// Se eu fosse um computador, conseguiria entender todas as instruções?

/**
 * ENUNCIADO:
 * Desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". 
 * Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
 * 
 * PASSO A PASSO (baby steps):
 * 
 * Criar uma const com uma palavra
 * Criar uma variável com o tamanho da palavra (precisa decrementar dentro do for)
 * Criar uma variável para a nova palavra invertida com uma string vazia
 * Criar um loop que itera o tamanho da palavra
 * Decrementar o tamanho da palavra e usar ele com index
 * Usar a concatenação para unir as letras na nova palavra
 */

const word = 'amor';
let wordLength = word.length;
let invertedWord = '';

for (let index = 0; index < word.length; index += 1) {
  wordLength -= 1
  invertedWord += word[wordLength];
}

console.log(invertedWord);
