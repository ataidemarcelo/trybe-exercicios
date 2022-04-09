// Eu resolvi o problema?
// Havia outras maneiras de resolver o problema?
// A maneira que eu escolhi foi a mais eficiente possível, ou havia como fazer a mesma coisa com menos passos?
// Seria possível inverter ou retirar algum passo?
// Se eu fosse um computador, conseguiria entender todas as instruções?

/**
 * ENUNCIADO:
 * Escreva dois algoritmos: um que retorne a maior palavra deste array e outro 
 * que retorne a menor. Considere o número de caracteres de cada palavra.
 * 
 * PASSO A PASSO (baby steps):
 * 
 * Criar uma variável com uma string vazia para a maior palavra
 * Criar uma variável com a maior palavra da lingua portuguesa para a menor palavra
 * Criar um loop que percorre o array e:
 * 
 * Primeiro:
 * Se a palavra contida no indice atual do array for  maior que a variável maiorPalavra
 *    - Atribui ela a variável maior palavra
 * 
 * Segundo:
 * Se a plavra no indice do array for  menor que a menorPalavra
 *    - Atribui o novo valor a variável menorPalavra
 * 
 * Obs: É importante que a varável menorPalavra tenha inicialmente a maior palavra encontrada.
*/

let array = ['java', 'javascript', 'python', 'html', 'css', 'a', 'pneumoultramicroscopicossilicovulcanoconiótico'];

let biggestWord = '';
let smallestWord = 'pneumoultramicroscopicossilicovulcanoconiótico';

// Primeiro algoritmo: retorna a maior palavra.
for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length ) {
    biggestWord = array[index]
  }
}

// Segundo algoritmo: Retorna a menor palavra.
for (let index = 0; index < array.length; index += 1) {
  if (array[index].length <= smallestWord.length ) {
    smallestWord = array[index]
  }
}

console.log(biggestWord)
console.log(smallestWord)
